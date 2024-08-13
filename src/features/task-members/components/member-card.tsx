import { Member } from "../types/types";

export const MemberCard: 
    React.FC<{member: Member, type: string, isAdmin: boolean}> 
    = ({member, type, isAdmin}) => {

    return(
        <div 
            className="flex items-center justify-between w-[90%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white"
            >
            <img src={member.img} alt={member.name} className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]" />
            <p>{member.name}</p>
            {type === "added" && isAdmin && <p>🗑️</p>}
            {type === "no-added" && isAdmin && <p>➕</p>}
        </div>
    )
}