import type {Todo} from '../api';
import {cn} from '../utils';

interface Props extends React.ComponentProps<'div'> {
  todo: Todo;
  handleToggleTodo?: (id: Todo['id']) => void;
  className?: string;
}

export const TodoItem = ({todo, className}: Props) => {
  return (
    <div className={cn('flex flex-col border rounded', className)}>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </div>
  );
};
