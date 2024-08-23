export interface GroupDashboardResponse {
  id: string;
  name: string;
  category: string;
}
export interface TaskDashboardResponse {
  id: string;
  name: string;
  assignedBy: { group: string };
}
