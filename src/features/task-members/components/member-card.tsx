import useCheckRole from "../../../api/hooks/use-check-role-by-group-id";
import { Member } from "../types/types";

export const MemberCard: 
    React.FC<{member: Member, groupId: string | undefined, type: string}> 
    = ({member,groupId, type}) => {
    const { data: isAdmin, isLoading} = useCheckRole(groupId as string);

    return(
        <div 
            className="flex items-center justify-between w-[90%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white"
            >
            <img src={member.img} alt={member.name} className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]" />
            <p>{member.name}</p>
        </div>
    )
}