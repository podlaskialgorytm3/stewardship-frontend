import { SubtaskResponse } from "../types/types";
import { SubtaskCard } from "./subtask-card";

import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export const Subtasks: React.FC<{ subtasks: SubtaskResponse[] }> = ({
  subtasks,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold mt-10">your-subtasks</h1>
      <FormControl
        sx={{
          width: "50%",
          margin: "20px",
        }}
      >
        <InputLabel id="select-label">choose-status</InputLabel>
        <Select labelId="select-label" label="choose-status">
          <MenuItem value={`done`}>done</MenuItem>
          <MenuItem value={`in progress`}>in progress</MenuItem>
          <MenuItem value={`waiting`}>waiting</MenuItem>
        </Select>
      </FormControl>
      <div className="flex flex-wrap justify-center">
        {subtasks.map((subtask: SubtaskResponse) => (
          <SubtaskCard key={subtask.id} subtask={subtask} />
        ))}
      </div>
    </>
  );
};
