import { useState } from "react";
import { TaskCard } from "./task-card";
import { useFetchTasksToCards } from "../api/use-fetch-tasks-to-cards";
import useErrorMessage from "../../../../../shared/hooks/use-error-message";
import { Loading } from "../../../../../shared/components/loading";
import { TaskCardInterface } from "../types/types";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export const TaskArea: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  const [status, setStatus] = useState<string>("");
  const { data, isLoading, isError, error } = useFetchTasksToCards({
    groupId,
    status,
  } as { groupId: string | undefined; status: string });

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setStatus(event.target.value);
  };

  useErrorMessage({ isError, error } as {
    isError: boolean;
    error: { message: string };
  });

  return (
    <div className="w-[100%] flex flex-col items-center justify-start mt-5">
      <h1 className="text-2xl font-bold">your-tasks-in-this-group</h1>
      <FormControl
        sx={{
          width: "50%",
          margin: "20px",
        }}
      >
        <InputLabel id="select-label">choose-status</InputLabel>
        <Select
          labelId="select-label"
          label="choose-status"
          value={status}
          onChange={handleChange as () => void}
        >
          <MenuItem value="done">done</MenuItem>
          <MenuItem value="in progress">in progress</MenuItem>
          <MenuItem value="waiting">waiting</MenuItem>
        </Select>
      </FormControl>
      <div className="mt-5 flex flex-wrap justify-center">
        {isLoading && !data && <Loading size={150} />}
        {!isLoading &&
          data &&
          data.map((task: TaskCardInterface) => (
            <TaskCard key={task.taskInfo.id} task={task} />
          ))}
        {!isLoading && data && data.length === 0 && (
          <p className="mt-5">there are no tasks in this group</p>
        )}
      </div>
    </div>
  );
};
