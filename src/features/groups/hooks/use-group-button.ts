import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import { MEMBERSHIPMENT } from "../constants/constants"
import { HandlingGroupCard } from "../types/types";

const useGroupButton = ({sendRequestMutate, cancelRequestMutate, groupId, typeOfMember} : HandlingGroupCard) => {
    const navigate = useNavigate();

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
            navigate(`/dashboard/groups/${groupId}`)
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

    return {membership, handleClick}
}

export default useGroupButton;