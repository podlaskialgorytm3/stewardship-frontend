import { TaskPageResponse } from "../types/types";
import { formatDateTime } from "../../../shared/utils/utils";
import { TaskElement } from "./task-element";

export const TaskInformation: React.FC<{taskInfo: TaskPageResponse}> = ({taskInfo}) => {
    const priority = taskInfo.taskInfo.priority
    const status = taskInfo.taskInfo.status

    return (
        <div className="mt-5 flex flex-col items-center w-[910px]">
            <h1 className="text-2xl font-bold">{taskInfo.taskInfo.name}</h1>
            <div className="w-[910px] flex flex-wrap justify-center">
                <TaskElement size={700}> 
                    <p>{formatDateTime(taskInfo.taskInfo.startDate)} - {formatDateTime(taskInfo.taskInfo.endDate)}</p>
                </TaskElement>
                <TaskElement size={200}>
                    <p className={`${priority === "low priority" ? "text-green-800" : (priority === "medium priority" ? "text-orange-600" : "text-red-700")} font-bold`}>{priority}</p>
                </TaskElement>
                <TaskElement size={200}>
                    <p className={`${status === "waiting" ? "text-yellow-600" : (status === "in progress" ? "text-orange-600" : "text-green-800")} font-bold`}>{status}</p>
                </TaskElement>
                <TaskElement size={300}>
                    <p>assigned-by: {taskInfo.taskInfo.assignedBy.name}</p>
                    <img src={taskInfo.taskInfo.assignedBy.img} alt={taskInfo.taskInfo.assignedBy.name} className="mt-5 w-12 h-12 rounded-full border-2 border-dark object-cover" />
                </TaskElement>
                <TaskElement size={500}>
                    <h1 className="text-xl font-bold">comments:</h1>
                    <p>{taskInfo.taskInfo.comments}</p>
                </TaskElement>
            </div>
        </div>
    );
}