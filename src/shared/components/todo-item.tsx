import type {Todo, TodoStatus} from '../api';
import {Button, Select} from '../ui';
import {cn} from '../utils';

const OPTIONS = [
  {
    label: 'Pending',
    value: 'pending',
  },
  {
    label: 'In Progress',
    value: 'inProgress',
  },
  {
    label: 'Done',
    value: 'done',
  },
];

interface Props extends React.ComponentProps<'div'> {
  todo: Todo;
  handleToggleTodo: (id: Todo['id'], status: TodoStatus) => void;
  handleDeleteTodo: (id: Todo['id']) => void;
  className?: string;
}

export const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleToggleTodo,
  className,
}: Props) => {
  return (
    <div className={cn('flex flex-col border rounded', className)}>
      <div>Title: {todo.title}</div>
      <div>Description: {todo.description}</div>
      <Select
        value={todo.status}
        onChange={(event) =>
          handleToggleTodo(todo.id, event.target.value as TodoStatus)
        }
        options={OPTIONS}
      />
      <Button
        onClick={() => handleDeleteTodo(todo.id)}
        className="bg-rose-600 hover:bg-rose-800">
        Delete
      </Button>
    </div>
  );
};
