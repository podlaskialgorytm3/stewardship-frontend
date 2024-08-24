import { DashboardElement } from "./dashboard-element";
import { GroupCard } from "./group-card";
import { TaskCard } from "./task-card";
import { GroupDashboardResponse, TaskDashboardResponse } from "../types/types";
import { useFetchGroups } from "../api/use-fetch-groups";
import { useFetchTasks } from "../api/use-fetch-tasks";
import { Loading } from "../../../shared/components/loading";
import useErrorMessage from "../../../shared/hooks/use-error-message";

export const UserDashboard: React.FC = () => {
  const {
    data: groups = [],
    isLoading: groupsLoading,
    isError,
    error,
  } = useFetchGroups();

  const { data: tasks = [], isLoading: tasksLoading } = useFetchTasks();

  useErrorMessage({ isError, error } as {
    isError: boolean;
    error: { message: string };
  });
  return (
    <div className="w-[100%] mt-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center">
        Welcome to your dashboard!
      </h1>
      <div className="mt-5 w-[80%] flex flex-wrap justify-center">
        <DashboardElement title="your-groups" width={400}>
          {groupsLoading ? (
            <Loading size={50} />
          ) : groups && Array.isArray(groups) ? (
            groups.map((group: GroupDashboardResponse) => (
              <GroupCard key={group.id} group={group} />
            ))
          ) : (
            <p>No groups available.</p>
          )}
        </DashboardElement>
        <DashboardElement title="your-tasks" width={400}>
          {tasksLoading ? (
            <Loading size={50} />
          ) : tasks && Array.isArray(tasks) ? (
            tasks.map((task: TaskDashboardResponse) => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <p>No tasks available.</p>
          )}
        </DashboardElement>
      </div>
    </div>
  );
};
