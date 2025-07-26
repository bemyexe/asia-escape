import {TodoApp} from '../features';
import {cn} from '../shared/utils';

interface Props {
  className?: string;
}

export const App = ({className}: Props) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center min-h-screen p-2',
        className
      )}>
      <TodoApp />
    </div>
  );
};
