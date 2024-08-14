import { TaskPageResponse } from "../types/types";
import { formatDateTime } from "../../../shared/utils/utils";
import { TaskElement } from "./task-element";

import { STATUS_COLORS, PRIORITY_COLORS } from "../constants/constants";


export const TaskInformation: React.FC<{taskInfo: TaskPageResponse}> = ({taskInfo}) => {
    const priority = taskInfo.taskInfo.priority
    const status = taskInfo.taskInfo.status

    return (
        <div className="mt-5 flex flex-col items-center w-[910px]">
            <h1 className="text-2xl font-bold">{taskInfo.taskInfo.name}</h1>
            <div className="w-[910px] flex flex-wrap">
                <TaskElement size={700}>
                    <p>{formatDateTime(taskInfo.taskInfo.startDate)} - {formatDateTime(taskInfo.taskInfo.endDate)}</p>
                </TaskElement>
                <TaskElement size={300}>
                    <p className={`text-[${PRIORITY_COLORS["high priority"]}]`}>{taskInfo.taskInfo.priority}</p>
                </TaskElement>
            </div>
        </div>
    );
}