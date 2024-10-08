import Swal from "sweetalert2";
import { Member } from "../../../../../shared/types/members";

import { useDeleteMember } from "../api/use-delete-member";
import { useChangeRole } from "../api/use-change-role";

const useHandleMember = ({
  isAdmin,
  isLoading,
  member,
  groupId,
}: {
  isAdmin: boolean;
  isLoading: boolean;
  member: Member;
  groupId: string | undefined;
}) => {
  const { mutate: deleteMember } = useDeleteMember();
  const { mutate: changeRole } = useChangeRole();

  const handleDelete = () => {
    if (!isLoading && isAdmin) {
      Swal.fire({
        title: "Are you sure?",
        text: `Do you want to remove ${member.name} from the group?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        confirmButtonColor: "#7e007e",
        cancelButtonColor: "#7e007e",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteMember({ memberId: member.id, groupId: groupId as string });
        }
      });
    }
  };

  const handleChangeRole = () => {
    if (!isLoading && isAdmin) {
      Swal.fire({
        title: "Change role",
        text: `Do you want to change role of ${member.name}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        confirmButtonColor: "#7e007e",
        cancelButtonColor: "#7e007e",
      }).then((result) => {
        if (result.isConfirmed) {
          changeRole({ memberId: member.userId, groupId: groupId as string });
        }
      });
    }
  };

  return { handleDelete, handleChangeRole };
};

export { useHandleMember };
