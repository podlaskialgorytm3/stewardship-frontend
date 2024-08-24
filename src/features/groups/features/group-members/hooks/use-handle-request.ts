import Swal from "sweetalert2";
import { Member } from "../../../../../shared/types/members";
import { useChangeStatus } from "../api/use-change-status";

const useHandleRequest = ({
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
  const { mutate } = useChangeStatus();

  const handleAccept = () => {
    if (!isLoading && isAdmin) {
      Swal.fire({
        title: "Are you sure?",
        text: `You want to accept ${member.name}'s request`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Accept",
      }).then((result) => {
        if (result.isConfirmed) {
          mutate({
            groupId: groupId as string,
            userId: member.id,
            status: "accepted",
          });
        }
      });
    }
  };

  const handleReject = () => {
    if (!isLoading && isAdmin) {
      Swal.fire({
        title: "Are you sure?",
        text: `You want to reject ${member.name}'s request`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Reject",
      }).then((result) => {
        if (result.isConfirmed) {
          mutate({
            groupId: groupId as string,
            userId: member.id,
            status: "rejected",
          });
        }
      });
    }
  };

  return {
    handleAccept,
    handleReject,
  };
};

export { useHandleRequest };
