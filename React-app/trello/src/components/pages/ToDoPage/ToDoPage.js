/* eslint-disable */

import React, { useEffect, useState } from 'react';
import Button from '../../atoms/button';
import ToDoForm from '../../molecules/ToDoForm'
import ToDoList from '../../molecules/ToDoList'
import originalListFromTodos from '../../../data/todos'
import H2Text from '../../atoms/h2Text'

let originalList = originalListFromTodos;
const defaultChangedValue = false;


const ToDoPage = (props) => {
  const [list, setList] = useState(originalList);
  const [isChanged, setChanged] = useState(defaultChangedValue);
  const onAddNewItem = (value) => {
    setList([...list, { title:value, changed: false, id:list.length+1 }]);
  }

  console.log(JSON.stringify(list));
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

  const onChecked = (ev, i) => {
    const {
      target: { checked },
    } = ev;
    setList((list) => list.map((listItem, index) => (i === index ? { ...listItem, checked } : listItem)));
  }

  const onRemove = (i) => {
    setList(list.filter((elem, index) => i !== index));
  }
  return (
    <>
      <H2Text isChanged={isChanged}>AAAAAAA list</H2Text>
      <ToDoForm onSubmit={onAddNewItem}/>
      <Button onClick={resetList}>Reset</Button>
      <Button onClick={saveList}>Save</Button>
      <ToDoList list={list} onRemove={onRemove} isChanged={isChanged} onChecked={onChecked}/>
    </>
  );
}

export default ToDoPage;
