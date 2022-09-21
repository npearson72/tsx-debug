import { object, string, boolean, number } from 'yup';

const newTodoSchema = object({
  title: string().required(),
  complete: boolean().optional().default(false),
  userId: number().required()
});

const updateTodoSchema = object({
  id: number().required(),
  title: string().optional(),
  complete: boolean().optional(),
  userId: number().required()
});

export { newTodoSchema, updateTodoSchema };
