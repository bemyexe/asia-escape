import React from 'react';

import {cn} from '../utils';

interface Props extends React.ComponentProps<'input'> {
  label?: string;
  className?: string;
}

export const Input = ({label, className, ...props}: Props) => {
  const inputId = React.useId();

  return (
    <div className={cn('flex', className)}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input id={inputId} className="border rounded p-0.5" {...props} />
    </div>
  );
};
