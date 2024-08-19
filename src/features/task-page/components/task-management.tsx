import { TaskElement } from "./task-element";

import { useHandleCreateSubtask } from "../hooks/use-handle-create-subtask";
import { useHandleEditTask } from "../hooks/use-handle-edit-task";

const TaskManagement: React.FC<{ taskInfoId: string | undefined }> = ({
  taskInfoId,
}) => {
  const { handleCreateSubtask } = useHandleCreateSubtask();
  const { handleEditTask } = useHandleEditTask();

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
        <button
          className="bg-primary text-white p-2 rounded-md"
          onClick={() => handleEditTask()}
        >
          edit-task
        </button>
      </div>
    </TaskElement>
  );
};

export { TaskManagement };
