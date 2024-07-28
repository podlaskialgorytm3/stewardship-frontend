import { MEMBERSHIPMENT } from "../constants/constants"
import useSendRequest from "../api/use-send-request";
import useCancelRequest from "../api/use-cancel-request";
import Loading from "../../../shared/components/loading";

import Swal from 'sweetalert2';

export const GroupButton = ({typeOfMember,groupId} : {typeOfMember: string, groupId: number}) => {
    const { mutate: sendRequestMutate, isPending: sendRequestPending} = useSendRequest();
    const { mutate: cancelRequestMutate, isPending: cancelRequestPending} = useCancelRequest();

    const membership: {
        type: string;
        color: string;
        text: string;
    } | any = MEMBERSHIPMENT.find((membership) => membership.type === typeOfMember)

    const handleClick = (type: string) => {
        if(type === 'none'){
            sendRequestMutate(groupId)
        }
        else if(type === 'member'){
            // redirect to group page
        }
        else if(type === "pending"){
            Swal.fire({
                title: 'Cancel Request',
                text: 'Are you sure you want to cancel your request?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
            }).then((result) => {
                if (result.isConfirmed) {
                    cancelRequestMutate(groupId)
                }
            });
        }
    }


    return (
        <>
        {(sendRequestPending || cancelRequestPending) ? <Loading size={50} /> : (
            <button 
            className={`${membership.color} text-white px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => handleClick(membership.type)}
            >{membership.text}</button>
        )}
        </>
    )
}