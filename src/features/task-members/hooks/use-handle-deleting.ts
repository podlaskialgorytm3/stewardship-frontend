import { Member } from "../types/types";

import Swal from "sweetalert2";

const useHandleDeleting = ({member, taskInfoId} : {member: Member, taskInfoId: string | undefined}) => {
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
            // mutate
            }
        })
    }

    return {
        handleDeleteMemberFromTask
    }
}

export default useHandleDeleting;