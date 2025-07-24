import type {Todo} from '../api';

import {TodoItem} from './todo-item';

interface Props extends React.ComponentProps<'ul'> {
  todos: Todo[];
  className?: string;
  handleDeleteTodo: (id: Todo['id']) => void;
}

export const TodoList = ({todos, handleDeleteTodo, className}: Props) => {
  return (
    <ul className={className}>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};
