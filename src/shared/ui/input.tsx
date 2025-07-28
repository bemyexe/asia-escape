import React from 'react';

import {cn} from '../utils';

type InputType = React.HTMLInputTypeAttribute;

interface Props extends React.ComponentProps<'input'> {
  label?: string;
  type: InputType;
  className?: string;
}

export const Input = ({label, type, className, ...props}: Props) => {
  const inputId = React.useId();

  return (
    <div className={cn('flex', className)}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        type={type}
        id={inputId}
        className="border rounded p-0.5 bg-white"
        {...props}
      />
    </div>
  );
};
