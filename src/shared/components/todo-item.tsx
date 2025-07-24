import type {Todo} from '../api';
import {Button} from '../ui';
import {cn} from '../utils';

interface Props extends React.ComponentProps<'div'> {
  todo: Todo;
  handleToggleTodo?: (id: Todo['id']) => void;
  handleDeleteTodo: (id: Todo['id']) => void;
  className?: string;
}

export const TodoItem = ({todo, handleDeleteTodo, className}: Props) => {
  return (
    <div className={cn('flex flex-col border rounded', className)}>
      <div>Title: {todo.title}</div>
      <div>Description: {todo.description}</div>
      <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
    </div>
  );
};
