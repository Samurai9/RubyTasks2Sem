/* eslint-disable */
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import ToDoPage from './components/pages/ToDoPage';
import HomePage from './components/pages/HomePage';
import TaskPage from './components/pages/TaskPage';
import routes from  './config/todo';

function App() {
  const { HOME, TASKS, TASK} = routes;

  const Application = () => {
    return (<ToDoPage />)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <BrowserRouter>
            <Switch>
              <Route exact path={HOME}>
                <HomePage />
              </Route>

              <Route exact path={TASKS}>
                <Application />
              </Route>

              <Route path={TASK}>
                <TaskPage />
              </Route>
              
            </Switch>
          </BrowserRouter>
        </p>
      </header>
    </div>


  );
}

export default App;
