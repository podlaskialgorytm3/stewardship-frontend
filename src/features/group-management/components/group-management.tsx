import useFetchGroup from "../api/use-fetch-group";
import Loading from "../../../shared/components/loading";
import useErrorMessage from "../../../shared/hooks/use-error-message";

import { ButtonArea } from "./button-area";

export const GroupManagement: React.FC<{groupId: string | undefined}> = ({groupId}) => {
    const { data, isLoading, isError, error } = useFetchGroup(groupId as string);

  
    useErrorMessage({isError, error } as {isError: boolean, error: {message: string}});
    return (
        <div className="w-[70%] h-[400px] flex flex-col items-center justify-start">
            {(data && !isLoading) ? (
                <>
                    <h1 className="text-2xl font-bold">{data.name}</h1>
                    <p className="text-m">{data.category}</p>
                </>
            ): (
                <Loading size={50} />
            )}
            <ButtonArea groupId={groupId}/>
        </div>
    );
}
