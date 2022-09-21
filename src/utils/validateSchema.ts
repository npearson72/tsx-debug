import { AnySchema } from 'yup';

const validateSchema = async (data: any, schema: AnySchema) => {
  const result = await schema.validate(data, { abortEarly: false });

  return result;
};

export { validateSchema };
