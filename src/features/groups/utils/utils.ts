import zod from 'zod';

export const groupSchema = zod.object({
  name: zod.string().min(3),
  category: zod.string().min(3),
});