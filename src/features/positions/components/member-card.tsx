import { Member } from "../../../shared/types/members";

import { useHandlePosition } from "../hooks/use-handle-position";

export const MemberCard: React.FC<{
  member: Member;
}> = ({ member }) => {
  const { handlePosition } = useHandlePosition();

  return (
    <div
      className="flex items-center justify-between w-[95%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white"
      onClick={() => handlePosition(member.position, member.id.toString())}
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]"
      />
      <p>{member.name}</p>
      <p>{member.position || "without-position"}</p>
    </div>
  );
};
