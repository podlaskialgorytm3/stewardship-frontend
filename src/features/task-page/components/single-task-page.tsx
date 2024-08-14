import { useParams } from "react-router-dom"

import { TaskMembers } from "../../task-members/components/task-members"

import useFetchTask from "../api/use-fetch-task";
import Loading from "../../../shared/components/loading";

import useErrorMessage from "../../../shared/hooks/use-error-message";

export const SingleTaskPage: React.FC = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useFetchTask(id as string);
    useErrorMessage({isError, error} as {isError: boolean, error: {message: string}});
    return (
        <div className="mt-5 w-[1300px] flex">
            {isLoading && !data && <Loading size={150}/>}
            {!isLoading && data && (
                <>
                    <div className="w-[70%]">

                    </div>
                    <div className="w-[30%]">
                        <TaskMembers taskInfoId={id}/>
                    </div>
                </>
            )}
        </div>
    )
}