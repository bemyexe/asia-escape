import React from 'react';
import {nanoid} from 'nanoid';

import type {Todo} from '../shared/api';
import {TodoPanel} from '../shared/components';
import {TodoList} from '../shared/components/todo-list';

interface Props {
  className?: string;
}

const DEFAULT_TODOS: Todo[] = [];

export const App = ({className}: Props) => {
  const [todos, setTodos] = React.useState<Todo[]>(DEFAULT_TODOS);

  const handleAddTodo = (
    title: Todo['title'],
    description: Todo['description']
  ) => {
    const newTodo: Todo = {id: nanoid(), title, description, status: 'pending'};
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id: Todo['id']) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className={className}>
      <TodoPanel handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};
