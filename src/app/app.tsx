import React from 'react';
import {nanoid} from 'nanoid';

import type {FilterTodos, Todo, TodoStatus} from '../shared/api';
import {TodoFilters, TodoList, TodoPanel} from '../shared/components';
import {
  cn,
  getTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from '../shared/utils';

interface Props {
  className?: string;
}

const DEFAULT_FILTER = 'all';

export const App = ({className}: Props) => {
  const [todos, setTodos] = React.useState<Todo[]>(() =>
    getTodosFromLocalStorage()
  );

  const [filter, setFilter] = React.useState<FilterTodos>(DEFAULT_FILTER);

  React.useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

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

  const handleFilterChange = (newFilter: FilterTodos) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    const map = {
      all: true,
      pending: todo.status === 'pending',
      inProgress: todo.status === 'inProgress',
      done: todo.status === 'done',
    };
    return map[filter];
  });

  return (
    <div
      className={cn(
        'flex items-center justify-center min-h-screen p-2',
        className
      )}>
      <div className="flex flex-col items-center justify-center gap-2 border rounded p-2 bg-blue-100 max-w-[768px]">
        <TodoPanel handleAddTodo={handleAddTodo} />
        {todos.length > 0 && (
          <TodoFilters
            filter={filter}
            handleFilterChange={handleFilterChange}
          />
        )}
        {todos.length > 0 ? (
          <TodoList
            todos={filteredTodos}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        ) : (
          <div>no todos ...</div>
        )}
      </div>
    </div>
  );
};
