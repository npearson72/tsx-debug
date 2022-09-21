export interface NewTodo {
  title: string;
  complete: boolean;
  userId: number;
}

export interface Todo extends NewTodo {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
