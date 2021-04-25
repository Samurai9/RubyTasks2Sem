/* eslint-disable */
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import ToDoPage from './components/pages/ToDoPage';
import HomePage from './components/pages/HomePage';
import TaskPage from './components/pages/TaskPage';
import routes from './config/todo';
import apolloClient from './lib/apolloClient';
import TaskWithGrapqlPage from '../src/components/pages/TasksWithGraphqlPage';

import { ApolloProvider } from '@apollo/client';

function App() {
  const { HOME, TASKS, TASK, GR_TASKS } = routes;

  const Application = () => {
    return (<ToDoPage />)
  }
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <BrowserRouter>
              <Switch>
                <Route exact path={HOME}>
                  <HomePage />
                </Route>

                <Route exact path={TASKS}>
                  <Application />
                </Route>

                <Route exact path={TASK}>
                  <TaskPage />
                </Route>

                <Route exact path={GR_TASKS}>
                  <TaskWithGrapqlPage />
                </Route>
              </Switch>
            </BrowserRouter>
            </div>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
