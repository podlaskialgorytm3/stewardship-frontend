import { z } from "zod";

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

export const CreateSubtaskSchema = z.object({
  title: z.string().min(3, "Title must have at least 3 character"),
  description: z.string().min(3, "Description must have at least 3 character"),
  status: z.string().min(3, "Status must have at least 3 character"),
});

export const EditTaskSchema = z.object({
  name: z.string().min(3, "Task name must have at least 3 character"),
  status: z.string().min(3, "Status must have at least 3 character"),
  priority: z.string().min(3, "Priority must have at least 3 character"),
  startDate: z.string().min(3, "Start date is required"),
  endDate: z.string().min(3, "End date is required"),
  comments: z.string().min(3, "Comments must have at least 3 character"),
});

export interface CreateSubtaskType {
  title: string;
  description: string;
  status: string;
  taskInfoId: string | undefined;
}
