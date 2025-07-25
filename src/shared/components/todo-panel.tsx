import React from 'react';

import {Button, Input} from '../ui';
import {cn} from '../utils';

interface Props extends React.ComponentProps<'form'> {
  handleAddTodo: (title: string, description: string) => void;
  className?: string;
}

const DEFAULT_FORM_STATE = {
  title: '',
  description: '',
};

export const TodoPanel = ({handleAddTodo, className}: Props) => {
  const [form, setForm] = React.useState(DEFAULT_FORM_STATE);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.title && form.description) {
      handleAddTodo(form.title, form.description);
      setForm(DEFAULT_FORM_STATE);
    }
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({...prev, [event.target.name]: event.target.value}));
  };

  return (
    <form
      className={cn('flex flex-col gap-2', className)}
      onSubmit={handleSubmit}>
      <Input
        className="flex-col"
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChangeForm}
        placeholder="Write a new title"
        required
      />
      <Input
        className="flex-col"
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChangeForm}
        placeholder="Write a new description"
        required
      />
      <Button type="submit" children="Create todo" />
    </form>
  );
};
