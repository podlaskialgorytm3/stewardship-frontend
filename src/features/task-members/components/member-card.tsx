import { Member } from "../types/types";

import useHandleAdding from "../hooks/use-handle-adding";
import useHandleDeleting from "../hooks/use-handle-deleting";

export const MemberCard: 
    React.FC<{member: Member, type: string, isAdmin: boolean, taskInfoId: string | undefined}> 
    = ({member, type, isAdmin, taskInfoId}) => {
        const { handleAddMemberToTask } = useHandleAdding({member, taskInfoId});
        const { handleDeleteMemberFromTask } = useHandleDeleting({member, taskInfoId});

    return(
        <div 
            className="flex items-center justify-between w-[90%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white"
            >
            <img src={member.img} alt={member.name} className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]" />
            <p>{member.name}</p>
            {type === "added" && isAdmin && <p onClick={() => handleDeleteMemberFromTask()}>🗑️</p>}
            {type === "no-added" && isAdmin && <p onClick={() => handleAddMemberToTask()}>➕</p>}
        </div>
    )
}