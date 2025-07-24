import {cn} from '../utils';

interface Props extends React.ComponentProps<'button'> {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({onClick, className, children, ...props}: Props) => {
  return (
    <button
      className={cn(
        'border rounded p-0.5 bg-blue-600 text-amber-50 cursor-pointer hover:bg-blue-800 active:scale-95 transition duration-300 ease-in-out',
        className
      )}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
};
