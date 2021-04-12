/* eslint-disable */

import React, { useEffect, useState } from 'react';
import Button from '../../atoms/button';
import ToDoForm from '../../molecules/ToDoForm'
import ToDoList from '../../molecules/ToDoList'
import originalListFromTodos from '../../../data/todos'

let originalList = originalListFromTodos;
const defaultChangedValue = false;


const ToDoPage = (props) => {
  const [list, setList] = useState(originalList);
  const [isChanged, setChanged] = useState(defaultChangedValue);
  const onAddNewItem = (value) => {
    setList([...list, { text:value, id:list.length+1 }]);
  }

  useEffect(() => {
    if (JSON.stringify(list) === JSON.stringify(originalList)) {
      setChanged(false);
    } else {
      setChanged(true);
    }
  });

  const resetList = () => {
    setList(originalList);
  }
   
  const saveList = () => {
    originalList = list;
    setChanged(false);
  }

  const onRemove = (i) => {
    setList(list.filter((elem, index) => i !== index));
  }
  return (
    <>
      <ToDoList list={list} onRemove={onRemove} isChanged={isChanged} />
      <ToDoForm onSubmit={onAddNewItem}/>
      <Button onClick={resetList}>Reset</Button>
      <Button onClick={saveList}>Save</Button>
    </>
  );
}

export default ToDoPage;
