import { useNavigate } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../../../shared/themes/themes";
import { Button } from "@mui/material";

import { TaskCardInterface } from "../types/types";

import { TaskCardAvatars } from "./task-card-avatars";

import {
  convertHoursToTime,
  formatDateTime,
} from "../../../shared/utils/utils";

export const TaskCard = ({ task }: { task: TaskCardInterface }) => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="border-primary border-[2px] text-primary rounded-xl p-6 shadow-md relative w-[600px] m-3">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold mb-4">{task.taskInfo.name}</h3>
          <p className="flex justify-center items-center">
            <span>assigned-by</span>
            <img
              className="w-10 h-10 rounded-full border-2 border-dark m-3"
              src={task.taskInfo.assignedBy.img}
              alt={task.taskInfo.assignedBy.name}
            />
          </p>
        </div>
        <TaskCardAvatars members={task.members} />
        <div className="flex items-center justify-between text-primary mb-4">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <span>{task.subTasks.length} 📝</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>⏰ {convertHoursToTime(task.taskInfo.time)}</span>
            </div>
          </div>
        </div>
        <div className="relative h-2 rounded-full bg-ligth mb-2">
          <div
            className="absolute top-0 left-0 h-2 rounded-full bg-dark"
            style={{ width: `${task.precentOfDoneSubtasks}` }}
          ></div>
        </div>
        <div className="text-primary text-sm mt-4 flex w-full justify-between">
          <p>
            {formatDateTime(task.taskInfo.startDate)} -{" "}
            {formatDateTime(task.taskInfo.endDate)}
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              navigate(`/dashboard/groups/task/${task.taskInfo.id}`)
            }
          >
            View Task
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};
