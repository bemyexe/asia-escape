import {AnimatePresence, motion} from 'motion/react';

import type {Todo, TodoStatus} from '../api';
import {cn} from '../utils';

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
    <ul className={cn('flex flex-col gap-2', className)}>
      <AnimatePresence>
        {todos.map((todo: Todo) => (
          <motion.li
            key={todo.id}
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3}}>
            <TodoItem
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};
