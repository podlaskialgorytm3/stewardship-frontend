import { z } from "zod";

export interface Member {
  email: string;
  group: string;
  id: string;
  img: string;
  name: string;
  role: string;
}

interface TaskInfoResponse {
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

export interface CreateSubtaskType {
  title: string;
  description: string;
  status: string;
  taskInfoId: string;
}
