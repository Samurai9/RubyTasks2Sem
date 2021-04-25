/* eslint-disable */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledInput = styled.div(({checked}) => `
// background-color: ${checked ? 'red' : 'green'};  
padding: 5px 10px;
  a {
    text-decoration: none;
  }
`);

const ToDoListItem = (props) => {
  const { children, id, checked } = props;
  return (
    <StyledInput checked>
      <Link to={`/tasks/${id}`}>{children}</Link>
    </StyledInput>
  )
}

export default ToDoListItem;