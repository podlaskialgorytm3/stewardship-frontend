import { Member } from "../../../../../shared/types/members";
import { useCheckRole } from "../../../../../api/hooks/use-check-role-by-group-id";
import { useHandleMember } from "../hooks/use-handle-member";
import { useHandleRequest } from "../hooks/use-handle-request";
import { useHandleUsers } from "../hooks/use-handle-users";

export const MemberCard: React.FC<{
  member: Member;
  groupId: string | undefined;
  type: string;
}> = ({ member, groupId, type }) => {
  const { data: isAdmin, isLoading } = useCheckRole(groupId as string);
  const { handleDelete, handleChangeRole } = useHandleMember({
    isAdmin: isAdmin as boolean,
    isLoading,
    member,
    groupId,
  });
  const { handleAccept, handleReject } = useHandleRequest({
    isAdmin: isAdmin as boolean,
    isLoading,
    member,
    groupId,
  });
  const { handleAdd } = useHandleUsers({
    isAdmin: isAdmin as boolean,
    isLoading,
    member,
    groupId,
  });

  return (
    <div className="flex items-center justify-between w-[95%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white">
      <img
        src={member.img}
        alt={member.name}
        className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]"
      />
      <p>{member.name}</p>
      {type === "follower" && <p>{member.role}</p>}
      {!isLoading && isAdmin && type === "follower" && (
        <>
          <div className="w-[50px] flex justify-between">
            <p onClick={() => handleDelete()}>🗑️</p>
            <p onClick={() => handleChangeRole()}>👨‍💼</p>
          </div>
        </>
      )}
      {!isLoading && isAdmin && type === "waiting" && (
        <div className="w-[50px] flex justify-between">
          <p onClick={() => handleAccept()}>✅</p>
          <p onClick={() => handleReject()}>❌</p>
        </div>
      )}
      {!isLoading && isAdmin && type === "added" && (
        <div className="w-[50px] flex justify-between">
          <p onClick={() => handleAdd()}>➕</p>
        </div>
      )}
    </div>
  );
};
