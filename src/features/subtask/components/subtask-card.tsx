import { SubtaskResponse } from "../types/types"

export const SubtaskCard:React.FC<{subtasks: SubtaskResponse}> = ({subtasks}) => {
    return(
        <div className="border-primary border-[2px] text-primary rounded-xl p-6 shadow-md relative w-[750px] m-3 flex justify-between">
            <div>
                <h1 className="text-2xl font-bold">{subtasks.title}</h1>
                <p>{subtasks.description}</p>
                <p className={`${subtasks.status === "waiting" ? "text-yellow-600" : (subtasks.status === "in progress" ? "text-orange-600" : "text-green-800")} font-bold`}>{subtasks.status}</p>
                <div className="mt-5">
                    <button className="bg-[orange] text-white px-4 py-2 rounded-xl ml-3">change-status</button>
                    <button className="bg-primary text-white px-4 py-2 rounded-xl ml-3">edit</button>
                    <button className="bg-[red] text-white px-4 py-2 rounded-xl ml-3">delete</button>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                <p>assigned-by <b>{subtasks.assignedBy.name}</b></p>
            </div>
        </div>
    )
}