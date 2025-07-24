import {cn} from '../utils';

interface SelectOption {
  label: string;
  value: string;
}

interface Props extends React.ComponentProps<'select'> {
  options: SelectOption[];
  className?: string;
}

export const Select = ({options, className, ...props}: Props) => {
  return (
    <select className={cn('border rounded p-1', className)} {...props}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};
