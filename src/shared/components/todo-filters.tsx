import React from 'react';

import type {FilterTodos} from '../api';
import {Select} from '../ui';
import {cn} from '../utils';

interface Props {
  filter: FilterTodos;
  handleFilterChange: (filter: FilterTodos) => void;
  className?: string;
}

const FILTER_OPTIONS = [
  {label: 'All', value: 'all'},
  {label: 'Pending', value: 'pending'},
  {label: 'In Progress', value: 'inProgress'},
  {label: 'Done', value: 'done'},
];

export const TodoFilters = ({filter, handleFilterChange, className}: Props) => {
  const filterId = React.useId();

  return (
    <div className={cn('flex flex-col gap-1 items-center', className)}>
      <label htmlFor={filterId}>Filter for status</label>
      <Select
        id={filterId}
        className="bg-white"
        value={filter}
        onChange={(event) =>
          handleFilterChange(event.target.value as FilterTodos)
        }
        options={FILTER_OPTIONS}
      />
    </div>
  );
};
