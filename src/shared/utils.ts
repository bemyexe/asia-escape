import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

import type {Todo} from './api';

const TODOS_KEY = 'todos';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTodosFromLocalStorage = (): Todo[] => {
  try {
    const data = localStorage.getItem('todos');

    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};
