/* eslint-disable */

import ToDoListItem from '../../atoms/toDoListItem';
import H2Text from '../../atoms/h2Text';
import Button from '../../atoms/button'

const ToDoList = (props) => {
  const { list, onRemove, isChanged } = props;
  return (
    <>
      <H2Text isChanged={isChanged}>AAAAAAA list</H2Text>
      <ul>
        {list.map((listItem, i) => (
          <>
            <ToDoListItem id={listItem.id}>
              {listItem.text}
            </ToDoListItem>
            <Button onClick={() => onRemove(i)}>
              [X]
            </Button>
          </>
        ))}

      </ul>
    </>
  );
}

export default ToDoList;