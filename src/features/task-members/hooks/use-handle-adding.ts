import { Member } from "../types/types";

import Swal from "sweetalert2";

const useHandleAdding = ({member, taskInfoId} : {member: Member, taskInfoId: string | undefined}) => {
    const handleAddMemberToTask = () => {
        Swal.fire({
            title: `Add ${member.name} to this task?`,
            text: `Are you sure you want to add ${member.name} to this task?`,
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
        handleAddMemberToTask
    }
}

export default useHandleAdding;