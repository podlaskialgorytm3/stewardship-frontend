import { object, string } from 'zod';

export const loginFormSchema = object({
  email: string({
    message: "E-mail is required!"
  }).email({
    message: "Write correct email!"
  }),
  password: string().min(6),
});