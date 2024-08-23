import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import { queryClient } from "../../../api/utils/query-client";

import Swal from "sweetalert2";

const addMemberToTask = async ({
  memberId,
  taskInfoId,
}: {
  memberId: string;
  taskInfoId: string | undefined;
}) => {
  const response = await fetch(`${API_URL}/stewardship/task-affilation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      groupUserId: memberId,
      taskInfoId,
    }),
  });

  if (!response.ok) {
    Swal.fire({
      title: "Error",
      text: "An error occurred while adding the member to the task",
      icon: "error",
    });
  }

  const data = await response.json();

  return data;
};

const useAddMemberToTask = () =>
  useMutation({
    mutationFn: addMemberToTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      Swal.fire({
        title: data.type,
        text: data.message,
        icon: data.type,
      });
    },
  });

export default useAddMemberToTask;
