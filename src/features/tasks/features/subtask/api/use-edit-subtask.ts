import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import { queryClient } from "../../../../../api/utils/query-client";
import { SubtaskUpdate } from "../types/types";

import Swal from "sweetalert2";

const editSubtask = async ({
  subtaskId,
  title,
  description,
}: SubtaskUpdate) => {
  const response = await fetch(`${API_URL}/stewardship/sub-task/${subtaskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ title, description }),
  });

  if (!response.ok) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong",
    });
  }

  const data = await response.json();

  return data;
};

const useEditSubtask = () =>
  useMutation({
    mutationFn: editSubtask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["task", "subtask"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useEditSubtask };
