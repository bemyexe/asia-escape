import React from 'react';
import {nanoid} from 'nanoid';

import type {Todo, TodoStatus} from '../shared/api';
import {TodoList, TodoPanel} from '../shared/components';
import {cn} from '../shared/utils';

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

  const handleToggleTodo = (id: Todo['id'], status: TodoStatus) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? {...todo, status} : todo))
    );
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center min-h-screen p-2',
        className
      )}>
      <div className="flex flex-col items-center justify-center gap-2 border rounded p-2 bg-blue-100">
        <TodoPanel handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
        />
      </div>
    </div>
  );
};
