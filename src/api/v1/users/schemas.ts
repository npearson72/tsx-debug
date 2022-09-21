import { object, string } from 'yup';

const newUserSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required()
});

export { newUserSchema };
