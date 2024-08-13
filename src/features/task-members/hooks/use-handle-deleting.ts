import { Member } from "../types/types";

import Swal from "sweetalert2";

import useDeleteMemberFromTask from "../api/use-delete-member-from-task";

import useErrorMessage from "../../../shared/hooks/use-error-message";

const useHandleDeleting = ({member, taskInfoId} : {member: Member, taskInfoId: string | undefined}) => {
    const { mutate, isPending, isError, error } = useDeleteMemberFromTask();

    useErrorMessage({isError, error} as {isError: boolean, error: {message: string}});

    const handleDeleteMemberFromTask = () => {
        Swal.fire({
            title: `Delete ${member.name} from this task?`,
            text: `Are you sure you want to delete ${member.name} from this task?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                isPending && Swal.fire({
                    text: "Loading...",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    showConfirmButton: false,
                })
                mutate({memberId: member.id, taskInfoId})
            }
        })
    }

    return {
        handleDeleteMemberFromTask
    }
}

export default useHandleDeleting;