import { TaskElement } from "./task-element";

import { useHandleCreateSubtask } from "../hooks/use-handle-create-subtask";
import { useHandleEditTask } from "../hooks/use-handle-edit-task";
import { useHandleDeleteTask } from "../hooks/use-handle-delete-task";

import { TaskInfoResponse } from "../types/types";

import { useCheckRoleByTasInfokId } from "../../../api/hooks/use-check-role-by-task-info-id";
import Loading from "../../../shared/components/loading";

const TaskManagement: React.FC<{
  taskInfoId: string | undefined;
  task: TaskInfoResponse;
}> = ({ taskInfoId, task }) => {
  const { handleCreateSubtask } = useHandleCreateSubtask();
  const { handleEditTask } = useHandleEditTask({ task });
  const { handleDeleteTask } = useHandleDeleteTask();

  const { data: isAdmin, isLoading: loadingRole } =
    useCheckRoleByTasInfokId(taskInfoId);

  return (
    <TaskElement size={400}>
      <div className="text-primary text-xl font-bold">task-management</div>
      <div className="mt-5 w-full flex justify-around">
        <button
          className="bg-primary text-white p-2 rounded-md"
          onClick={() => handleCreateSubtask(taskInfoId)}
        >
          add-subtask
        </button>
        {loadingRole && <Loading size={100} />}
        {isAdmin && (
          <>
            <button
              className="bg-primary text-white p-2 rounded-md"
              onClick={handleEditTask}
            >
              edit-task
            </button>
            <button
              className="bg-primary text-white p-2 rounded-md"
              onClick={() => handleDeleteTask(taskInfoId)}
            >
              delete-task
            </button>
          </>
        )}
      </div>
    </TaskElement>
  );
};

export { TaskManagement };
