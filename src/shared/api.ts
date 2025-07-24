export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
}

type TodoStatus = 'pending' | 'inProgress' | 'done';
