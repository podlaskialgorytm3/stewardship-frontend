import { useParams } from "react-router-dom"

import { TaskMembers } from "../../task-members/components/task-members"
import { TaskInformation } from "./task-information";

import useFetchTask from "../api/use-fetch-task";
import Loading from "../../../shared/components/loading";

import useErrorMessage from "../../../shared/hooks/use-error-message";
import useBelongToTask from "../api/use-belong-to-task";
import { AuthError } from "../../../shared/components/auth-error";

export const SingleTaskPage: React.FC = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useFetchTask(id as string);
    const { data: belongToTask, isLoading: loadingMemberBelongToTask } = useBelongToTask(id as string);

    useErrorMessage({isError, error} as {isError: boolean, error: {message: string}});
    return (
        <>
            {loadingMemberBelongToTask && <Loading size={150} />}
            {!loadingMemberBelongToTask && belongToTask && (
                <div className="mt-5 w-[1300px] flex">
                {isLoading && !data && <Loading size={150}/>}
                {!isLoading && data && (
                    <>
                        <div className="w-[70%]">
                            <TaskInformation taskInfo={data}/>
                        </div>
                        <div className="w-[30%]">
                            <TaskMembers taskInfoId={id}/>
                        </div>
                    </>
                )}
            </div>
            )}
            {!loadingMemberBelongToTask && !belongToTask && <AuthError> You are not belong to this task! </AuthError>}
        </>
    )
}