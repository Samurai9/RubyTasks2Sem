/* eslint-disable */

import { useHistory, useParams } from "react-router";
import todos from '../../../data/todos';
import Button from '../../atoms/button';

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
        {todo.title}
      </div>
      <div>
        {todo.description}
      </div>
      <Button onClick={goToPreviousPage}>
        Go back
      </Button>
    </>
  )
}

export default TaskPage;