import Swal from "sweetalert2";
import { Member } from "../types/types";

import useDeleteMember from "../api/use-delete-member";

const useHandleMember = ({isAdmin, isLoading, member, groupId} : {
    isAdmin: boolean,
    isLoading: boolean,
    member: Member,
    groupId: string | undefined
}) => {
    const { mutate: deleteMember } = useDeleteMember();

    const handleDelete = () => {
        if(!isLoading && isAdmin){
            Swal.fire("")
            Swal.fire({
                title: "Are you sure?",
                text: `Do you want to remove ${member.name} from the group?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                confirmButtonColor: "#7e007e",
                cancelButtonColor: "#7e007e"
            }).then((result) => {
                if(result.isConfirmed){
                    deleteMember({memberId: member.id, groupId: groupId as string});
                }
            });
        }
    }

    const handleChangeRole = () => {
        if(!isLoading && isAdmin){
            Swal.fire({
                title: "Change role",
                text: `Do you want to change role of ${member.name}?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                confirmButtonColor: "#7e007e",
                cancelButtonColor: "#7e007e"
            }).then((result) => {
                if(result.isConfirmed){
                    Swal.fire({
                        title: "Changed",
                        text: `Role of ${member.name} has been changed`,
                        icon: "success",
                        confirmButtonColor: "#7e007e"
                    })
                }
            });
        }
    }

    return {handleDelete, handleChangeRole}
}

export default useHandleMember;