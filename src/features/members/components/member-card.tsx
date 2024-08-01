import { Member } from "../types/types";
import useCheckRole from "../api/use-check-role";
import useHandleMember from "../hooks/use-handle-member";

export const MemberCard = ({member,groupId} : {member: Member,groupId: string | undefined}) => {
    const { data: isAdmin, isLoading} = useCheckRole(groupId as string);
    const { handleDelete, handleChangeRole } = useHandleMember({isAdmin: isAdmin as boolean, isLoading, member, groupId});
    return(
        <div 
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