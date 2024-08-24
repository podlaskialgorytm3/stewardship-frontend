import { Member } from "../types/types";

import { useAddMemberToTask } from "../api/use-add-member-to-task";
import useErrorMessage from "../../../../../shared/hooks/use-error-message";

import Swal from "sweetalert2";

const useHandleAdding = ({
  member,
  taskInfoId,
}: {
  member: Member;
  taskInfoId: string | undefined;
}) => {
  const { mutate, isPending, isError, error } = useAddMemberToTask();

  useErrorMessage({ isError, error } as {
    isError: boolean;
    error: { message: string };
  });

  const handleAddMemberToTask = () => {
    Swal.fire({
      title: `Add ${member.name} to this task?`,
      text: `Are you sure you want to add ${member.name} to this task?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        isPending &&
          Swal.fire({
            text: "Loading...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
          });
        mutate({ memberId: member.id, taskInfoId });
      }
    });
  };

  return {
    handleAddMemberToTask,
  };
};

export default useHandleAdding;
