import useFetchGroup from "../api/use-fetch-group";
import Loading from "../../../shared/components/loading";
import useErrorMessage from "../../../shared/hooks/use-error-message";

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
            <div className="flex justify-between w-[70%] mt-5">
            <button 
                className="bg-[#1c4c9b] hover:bg-[#398dce] text-white font-bold py-2 px-4 rounded mt-2"
                >create-task
            </button>
            <button 
                className="bg-[#7e007e] hover:bg-[#b331b3] text-white font-bold py-2 px-4 rounded mt-2"
                >edit-group
            </button>
            <button 
                className="bg-[#7e0000] hover:bg-[#b33131] text-white font-bold py-2 px-4 rounded mt-2"
                >delete-group
            </button>
            </div>
        </div>
    );
}
