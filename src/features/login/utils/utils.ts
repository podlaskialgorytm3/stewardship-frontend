import { object, string } from 'zod';

export const loginFormSchema = object({
  email: string({
    message: "E-mail is required!"
  }).email({
    message: "Write correct email!"
  }),
  password: string().min(6),
});

export const registerFormSchema = object({
  email: string({
    message: "E-mail is required!"
  }).email({
    message: "Write correct email!"
  }),
  password: string().min(6).max(20),
  name: string().min(2),
  img: string().url({
    message: "Write correct url!"
  })
});