import { TaskDashboardResponse } from "../types/types";
import { useNavigate } from "react-router-dom";

export const TaskCard: React.FC<{ task: TaskDashboardResponse }> = ({
  task,
}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-5 w-[90%] h-[120px] border-primary border-[2px] border-solid rounded-lg flex flex-col items-center justify-center">
      <div>
        <h1 className="text-xl font-bold mt-2">{task.name}</h1>
        <p className="text-md text-center">{task.assignedBy.group}</p>
      </div>
      <button
        className="bg-primary text-white p-2 rounded-md mt-2 mb-2"
        onClick={() => navigate(`/dashboard/task/${task.id}`)}
      >
        view-task
      </button>
    </div>
  );
};
