import Swal from "sweetalert2"
import { Member } from "../types/types";

const useHandleUsers = ({
    isAdmin,
    isLoading,
    member,
    groupId
}: {
    isAdmin: boolean;
    isLoading: boolean;
    member: Member;
    groupId: string | undefined;
}) => {
    const handleAdd = () => {
        if(!isLoading && isAdmin){
            Swal.fire({
                title: 'Are you sure?',
                text: `You want to add ${member.name} to the group?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7e007e',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, add it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // add user to group
                }
            })
        }
    }

    return {
        handleAdd
    };
}

export default useHandleUsers;