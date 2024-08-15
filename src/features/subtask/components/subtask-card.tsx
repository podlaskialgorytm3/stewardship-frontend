import { SubtaskResponse } from "../types/types"

import useFetchRight from "../api/use-fetch-right"
import useHandleStatus from "../hooks/use-handle-status"

export const SubtaskCard:React.FC<{subtask: SubtaskResponse}> = ({subtask}) => {
    const { data: isAuthorized, isLoading: loadingAuthorized } = useFetchRight(subtask.id);
    const { handleStatus } = useHandleStatus({subtaskId: subtask.id});

    return(
        <div className="border-primary border-[2px] text-primary rounded-xl p-6 shadow-md relative w-[750px] m-3 flex flex-col">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold">{subtask.title}</h1>
                    <p className="w-[400px]">{subtask.description}</p>
                    <p className={`${subtask.status === "waiting" ? "text-yellow-600" : (subtask.status === "in progress" ? "text-orange-600" : "text-green-800")} font-bold`}>{subtask.status}</p>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <p>assigned-by <b>{subtask.assignedBy.name}</b></p>
                </div>
            </div>
            {
                    (loadingAuthorized && !isAuthorized) && <p>loading...</p>
                }
                <div className="mt-5 flex justify-center">
                    <button className="bg-[orange] text-white px-4 py-2 rounded-xl ml-3" onClick={() => handleStatus(subtask.status)}>change-status</button>
                    {
                        isAuthorized && 
                        (<>
                            <button className="bg-primary text-white px-4 py-2 rounded-xl ml-3">edit</button>
                            <button className="bg-[red] text-white px-4 py-2 rounded-xl ml-3">delete</button>
                        </>
                        )
                    }
                </div>
        </div>
    )
}