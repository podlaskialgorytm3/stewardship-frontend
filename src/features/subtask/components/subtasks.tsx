import { SubtaskResponse } from "../types/types";
import { SubtaskCard } from "./subtask-card";

export const Subtasks: React.FC<{ subtasks: SubtaskResponse[] }> = ({
  subtasks,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold mt-10">your-subtasks</h1>
      <div className="flex flex-wrap justify-center">
        {subtasks.map((subtask: SubtaskResponse) => (
          <SubtaskCard key={subtask.id} subtask={subtask} />
        ))}
      </div>
    </>
  );
};
