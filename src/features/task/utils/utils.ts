import { object, string } from 'zod';

const datatimeLocalRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/;

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

export const taskSchema = object({
  'task-name': string({
    message: 'Title is required'
  }).min(3, 'Title must be at least 3 characters'),
  'start-date': string().regex(datatimeLocalRegex, 'Invalid date format'),
  'end-date': string().regex(datatimeLocalRegex, 'Invalid date format'),
   status: string({
      message: 'Status is required'
    }).min(3, 'Status must be at least 3 characters'),
   priority: string({
      message: 'Priority is required'
    }).min(3, 'Priority must be at least 3 characters'),
   comments: string({
      message: 'Comments is required'
    }).min(3, 'Comments must be at least 3 characters')
})

export const convertHoursToTime = (hours: number) => {
  const totalSeconds = Math.floor(hours * 3600);
  const hoursValue = Math.floor(totalSeconds / 3600);
  const minutesValue = Math.floor((totalSeconds % 3600) / 60);
  const secondsValue = totalSeconds % 60;

  const formattedTime = `${hoursValue}:${minutesValue.toString().padStart(2, '0')}:${secondsValue.toString().padStart(2, '0')}`;
  return formattedTime;
}