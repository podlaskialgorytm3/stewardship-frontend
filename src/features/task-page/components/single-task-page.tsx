import { useParams } from "react-router-dom";
import { useState } from "react";

import { TaskMembers } from "../../task-members/components/task-members";
import { TaskInformation } from "./task-information";

import useFetchTask from "../api/use-fetch-task";
import Loading from "../../../shared/components/loading";

import useErrorMessage from "../../../shared/hooks/use-error-message";
import useBelongToTask from "../api/use-belong-to-task";
import { AuthError } from "../../../shared/components/auth-error";
import { Subtasks } from "../../subtask/components/subtasks";

import { TaskManagement } from "./task-management";

export const SingleTaskPage: React.FC = () => {
  const [subtaskStatus, setSubtaskStatus] = useState<string>("");

  const { id } = useParams() as { id: string };
  const { data, isLoading, isError, error } = useFetchTask({
    taskInfoId: id,
    subtaskStatus,
  });
  const { data: belongToTask, isLoading: loadingMemberBelongToTask } =
    useBelongToTask(id as string);

  const handleChangeStatus = (event: React.ChangeEvent<{ value: string }>) => {
    setSubtaskStatus(event.target.value);
  };

  useErrorMessage({ isError, error } as {
    isError: boolean;
    error: { message: string };
  });
  return (
    <>
      {loadingMemberBelongToTask && <Loading size={150} />}
      {!loadingMemberBelongToTask && belongToTask && (
        <div className="mt-5 w-[1200px] flex">
          {isLoading && !data && <Loading size={150} />}
          {!isLoading && data && (
            <>
              <div className="w-[70%] flex flex-col items-center">
                <TaskInformation taskInfo={data} />
                <Subtasks
                  subtasks={data.subTasks}
                  handleChangeStatus={handleChangeStatus as () => void}
                  subtaskStatus={subtaskStatus}
                />
              </div>
              <div className="w-[30%] flex flex-col items-center">
                <TaskMembers taskInfoId={id} />
                <TaskManagement taskInfoId={id} task={data.taskInfo} />
              </div>
            </>
          )}
        </div>
      )}
      {!loadingMemberBelongToTask && !belongToTask && (
        <AuthError> You are not belong to this task! </AuthError>
      )}
    </>
  );
};
