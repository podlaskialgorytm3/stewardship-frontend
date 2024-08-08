import { object, string } from 'zod';

export const subtaskSchema = object({
  title: string({
    required_error: 'Title is required'
  }).min(3, 'Title must be at least 3 characters'),
    description: string({
        required_error: 'Description is required'
    }).min(3, 'Description must be at least 3 characters'),
    status: string({
        required_error: 'Status is required'
    }).min(3, 'Status must be at least 3 characters'),
});
