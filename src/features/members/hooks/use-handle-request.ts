import Swal from "sweetalert2";
import { Member } from "../types/types";

const useHandleRequest = ({isAdmin, isLoading, member, groupId} : {
    isAdmin: boolean,
    isLoading: boolean,
    member: Member,
    groupId: string | undefined
}) => {

    const handleAccept = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to accept ${member.name}'s request`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Accept'
        }).then((result) => {
            if (result.isConfirmed) {
                // adding 
            } 
        })
    }

    const handleReject = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to reject ${member.name}'s request`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Reject'
        }).then((result) => {
            if (result.isConfirmed) {
                // reject 
            } 
        })
    }

    return {
        handleAccept,
        handleReject
    }
}

export default useHandleRequest;