import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import { queryClient } from "../../../../../api/utils/query-client";

import Swal from "sweetalert2";

const deleteSubtask = async (subtaskId: string) => {
  const response = await fetch(`${API_URL}/stewardship/sub-task/${subtaskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    Swal.fire({
      title: "Error",
      text: "Something went wrong",
      icon: "error",
    });
  }

  const data = await response.json();

  return data;
};

const useDeleteSubtask = () =>
  useMutation({
    mutationFn: deleteSubtask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["task", "subtask"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useDeleteSubtask };
