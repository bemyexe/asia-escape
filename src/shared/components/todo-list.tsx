import type {Todo, TodoStatus} from '../api';

import {TodoItem} from './todo-item';

interface Props extends React.ComponentProps<'ul'> {
  todos: Todo[];
  handleDeleteTodo: (id: Todo['id']) => void;
  handleToggleTodo: (id: Todo['id'], status: TodoStatus) => void;
  className?: string;
}

export const TodoList = ({
  todos,
  handleDeleteTodo,
  handleToggleTodo,
  className,
}: Props) => {
  return (
    <ul className={className}>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        </li>
      ))}
    </ul>
  );
};
