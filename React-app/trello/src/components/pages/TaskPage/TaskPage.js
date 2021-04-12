/* eslint-disable */

import { useHistory, useParams } from "react-router";
import todos from '../../../data/todos';
import Button from '../../atoms/button';
import { Link } from 'react-router-dom';

const TaskPage = () => {
  const { id: queryId } = useParams();
  const todo = todos.find(({ id }) => id === +queryId);
  const history = useHistory();

  const goToPreviousPage = () => {
    history.goBack();
  }

  return (
    <>
      <div>
        {todo.text}
      </div>
      <Button onClick={goToPreviousPage}>
        Go back
      </Button>
    </>
  )
}

export default TaskPage;