import { TaskElement } from "./task-element";

import { useHandleCreateSubtask } from "../hooks/use-handle-create-subtask";

const TaskManagement: React.FC = () => {
  const { handleCreateSubtask } = useHandleCreateSubtask();

  return (
    <TaskElement size={400}>
      <div className="text-primary text-xl font-bold">task-management</div>
      <div className="mt-5 w-full flex justify-around">
        <button
          className="bg-primary text-white p-2 rounded-md"
          onClick={() => handleCreateSubtask()}
        >
          add-subtask
        </button>
      </div>
    </TaskElement>
  );
};

export { TaskManagement };
