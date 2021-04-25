/* eslint-disable */

import React, { useEffect, useState } from 'react';
import ToDoList from '../../molecules/ToDoList'
import originalListFromTodos from '../../../data/todos'
import useTasks from '../../../hooks/useTasks';
import useCreateTask from '../../../hooks/useCreateTask';
import ToDoForm from '../../molecules/ToDoForm'
import useRemoveTask from '../../../hooks/useRemoveTask';


let originalList = originalListFromTodos;
const defaultChangedValue = false;


const ToDoPage = () => {
  const {tasks, loading} = useTasks();
  const {createTask} = useCreateTask();
  const {removeTask} = useRemoveTask();


  return (
    <>
      <ToDoForm onSubmit={createTask}/>
      <ToDoList list={tasks} onRemove={removeTask}/>
    </>
  );
}

export default ToDoPage;
