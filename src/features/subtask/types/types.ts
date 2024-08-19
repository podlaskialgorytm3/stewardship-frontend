export interface Member {
  email: string;
  group: string;
  id: string;
  img: string;
  name: string;
  role: string;
}
export interface SubtaskResponse {
  assignedBy: Member;
  description: string;
  id: string;
  status: string;
  title: string;
  taskInfoId: string;
}
export interface SubtaskUpdate {
  subtaskId: string;
  title: string;
  description: string;
}
