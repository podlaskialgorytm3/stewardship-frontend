import { MEMBERSHIPMENT } from "../constants/constants"
import useSendRequest from "../api/use-send-request";
import useErrorMessage from "../../../shared/hooks/use-error-message";
import Loading from "../../../shared/components/loading";

export const GroupButton = ({typeOfMember,groupId} : {typeOfMember: string, groupId: number}) => {
    const { mutate, isPending, isError, error} = useSendRequest();

    const membership: {
        type: string;
        color: string;
        text: string;
    } | any = MEMBERSHIPMENT.find((membership) => membership.type === typeOfMember)

    const handleClick = (type: string) => {
        if(type === 'none'){
            mutate(groupId)
        }
        else if(type === 'member'){
            // redirect to group page
        }
    }

    useErrorMessage({isError, error} as {isError: boolean, error: Error});

    return (
        <>
        {isPending ? <Loading size={50} /> : (
            <button 
            className={`${membership.color} text-white px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => handleClick(membership.type)}
            >{membership.text}</button>
        )}
        </>
    )
}