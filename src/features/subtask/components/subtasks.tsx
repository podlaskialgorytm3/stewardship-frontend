import { TaskElement } from "../../task-page/components/task-element";
import { SubtaskResponse } from "../types/types";

export const Subtasks:React.FC<{subtasks: SubtaskResponse[]}> = ({subtasks}) => {
    return(
        <>
            <h1 className="text-2xl font-bold mt-10">your-subtasks</h1>
                <div>
                {
                    subtasks.map((subtask: SubtaskResponse) => (
                        <TaskElement size={500} key={subtask.id}>
                            <h1 className="text-xl font-bold">{subtask.title}</h1>
                            <p>{subtask.description}</p>
                        </TaskElement>
                    ))
                }
                </div>
        </>
    )
}