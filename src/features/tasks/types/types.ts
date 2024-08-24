import { z } from "zod";

const datatimeLocalRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/;

export interface Member {
  email: string;
  group: string;
  id: string;
  img: string;
  name: string;
  role: string;
}

export interface TaskInfoResponse {
  assignedBy: Member;
  comments: string;
  endDate: string;
  startDate: string;
  id: string;
  name: string;
  priority: string;
  status: string;
  time: number;
}

export interface SubtaskResponse {
  assignedBy: Member;
  description: string;
  id: string;
  status: string;
  title: string;
  taskInfoId: string;
}

export interface TaskPageResponse {
  taskInfo: TaskInfoResponse;
  subTasks: SubtaskResponse[];
  members: Member[];
  precentOfDoneSubtasks: string;
}

export interface TaskRequest {
  name: string;
  status: string;
  priority: string;
  startDate: string;
  endDate: string;
  comments: string;
}

export const EditTaskSchema = z
  .object({
    name: z
      .string({
        message: "Title is required",
      })
      .min(3, "Title must be at least 3 characters"),
    startDate: z.string().regex(datatimeLocalRegex, "Invalid date format"),
    endDate: z.string().regex(datatimeLocalRegex, "Invalid date format"),
    status: z
      .string({
        message: "Status is required",
      })
      .min(3, "Status must be at least 3 characters"),
    priority: z
      .string({
        message: "Priority is required",
      })
      .min(3, "Priority must be at least 3 characters"),
    comments: z
      .string({
        message: "Comments is required",
      })
      .min(3, "Comments must be at least 3 characters"),
  })
  .refine(
    (data) => {
      const startDate = new Date(data.startDate);
      const endDate = new Date(data.endDate);
      return startDate < endDate;
    },
    {
      message: "Start date must be earlier than end date",
      path: ["startDate"],
    }
  );

export interface CreateSubtaskType {
  title: string;
  description: string;
  status: string;
  taskInfoId: string | undefined;
}

export const CreateSubtaskSchema = z.object({
  title: z.string().min(3, "Title must have at least 3 character"),
  description: z.string().min(3, "Description must have at least 3 character"),
  status: z.string().min(3, "Status must have at least 3 character"),
});
