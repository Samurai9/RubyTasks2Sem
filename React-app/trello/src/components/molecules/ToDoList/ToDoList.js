/* eslint-disable */

import ToDoListItem from '../../atoms/toDoListItem';
import Button from '../../atoms/button'
import styled from 'styled-components'
import Checkbox from '../../atoms/checkbox'

const StyledDiv = styled.div(() => `
  display: flex;
`)

const StyledCard = styled.div(() => `
  margin: 20px 10px;
  padding: 8px 10px;
  border: 2px solid #61dafb;
  border-radius: 10px;
`);


const ToDoList = (props) => {
  const { list, onRemove, isChanged, onChecked } = props;

  return (
    <>
      <StyledDiv>
        {list.map((listItem, checked, i) => (
          <>
            <StyledCard>
              <ToDoListItem checked={listItem.checked} id={listItem.id}>
                {listItem.title}
              </ToDoListItem>

              <Checkbox onChange={(ev) => onChecked(ev, i)}/>
                            
              <Button onClick={() => onRemove(listItem.id)}>
                [X]
              </Button>
              
            </StyledCard>
          </>
        ))}

      </StyledDiv>
    </>
  );
}

export default ToDoList;