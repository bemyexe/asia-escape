import React from 'react';

import {Button, Input} from '../ui';
import {cn} from '../utils';

interface Props extends React.ComponentProps<'form'> {
  handleAddTodo: (title: string, description: string) => void;
  className?: string;
}

const DEFAULT_TITLE_STATE = '';
const DEFAULT_DESCRIPTION_STATE = '';

export const TodoPanel = ({handleAddTodo, className}: Props) => {
  const [title, setTitle] = React.useState(DEFAULT_TITLE_STATE);
  const [description, setDescription] = React.useState(
    DEFAULT_DESCRIPTION_STATE
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title && description) {
      handleAddTodo(title, description);
      setTitle(DEFAULT_TITLE_STATE);
      setDescription(DEFAULT_DESCRIPTION_STATE);
    }
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <form className={cn('flex flex-col', className)} onSubmit={handleSubmit}>
      <Input
        className="items-center gap-1"
        label="Title"
        value={title}
        onChange={handleChangeTitle}
        placeholder="Write a new title"
      />
      <Input
        className="items-center gap-1"
        label="Description"
        value={description}
        onChange={handleChangeDescription}
        placeholder="Write a new description"
      />
      <Button type="submit" children="Create todo" />
    </form>
  );
};
