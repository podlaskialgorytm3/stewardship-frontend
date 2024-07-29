import { Member } from "../types/types";
import useCheckRole from "../api/use-check-role";

import Swal from "sweetalert2";

export const MemberCard = ({member,groupId} : {member: Member,groupId: string | undefined}) => {
    const { data: isAdmin, isLoading} = useCheckRole(groupId as string);

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
                    Swal.fire({
                        title: "Removed",
                        text: `${member.name} has been removed from the group`,
                        icon: "success",
                        confirmButtonColor: "#7e007e"
                    })
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

    return(
        <div 
            key={member.id} 
            className="flex items-center justify-between w-[90%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white"
            >
            <img src={member.img} alt={member.name} className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]" />
            <p>{member.name}</p>
            <p>{member.role}</p>
            {!isLoading && isAdmin && (
                <div className="w-[50px] flex justify-between">
                    <p onClick={() => handleDelete()}>🗑️</p>
                    <p onClick={() => handleChangeRole()}>👨‍💼</p>
                </div>
            )}
        </div>
    )
}