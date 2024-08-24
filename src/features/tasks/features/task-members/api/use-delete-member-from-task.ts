import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import { queryClient } from "../../../../../api/utils/query-client";

import Swal from "sweetalert2";

const deleteMemberFromTask = async ({
  memberId,
  taskInfoId,
}: {
  memberId: string;
  taskInfoId: string | undefined;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/task-affilation?taskInfoId=${taskInfoId}&groupUserId=${memberId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    Swal.fire({
      title: "Error",
      text: "An error occurred while delete the member from task",
      icon: "error",
    });
  }

  const data = await response.json();

  return data;
};

const useDeleteMemberFromTask = () =>
  useMutation({
    mutationFn: deleteMemberFromTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      Swal.fire({
        title: data.type,
        text: data.message,
        icon: data.type,
      });
    },
  });

export { useDeleteMemberFromTask };
