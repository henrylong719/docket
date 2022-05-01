import React from 'react';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';

const TodoScreen = () => {
  return (
    <div>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default TodoScreen;
