import { Member } from "../types/types";

export const MemberCard = ({member} : {member: Member}) => {

    return(
        <div key={member.id} className="flex items-center justify-between w-[90%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white">
            <img src={member.img} alt={member.name} className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]" />
            <p>{member.name}</p>
            <p>{member.role}</p>
        </div>
    )
}