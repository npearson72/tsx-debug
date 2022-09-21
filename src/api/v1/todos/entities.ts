import type { Todo } from '@domains/todos/types';

type TodoEntity = Pick<Todo, 'id' | 'title' | 'complete' | 'userId'>;

const todoEntity = (todo: Todo): TodoEntity => {
  const { id, title, complete, userId } = todo;

  return { id, title, complete, userId };
};

const todoEntities = (todos: Todo[]) => {
  return todos.map(todo => todoEntity(todo));
};

export { todoEntity, todoEntities };
