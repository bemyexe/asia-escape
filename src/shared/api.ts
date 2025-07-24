export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
}

export type TodoStatus = 'pending' | 'inProgress' | 'done';

export type FilterTodos = 'all' | TodoStatus;
