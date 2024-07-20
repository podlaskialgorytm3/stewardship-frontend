import { object, string } from 'zod';

export const loginFormSchema = object({
  email: string().email(),
  password: string().min(6),
});