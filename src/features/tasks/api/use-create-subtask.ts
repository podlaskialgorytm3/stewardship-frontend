import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import { queryClient } from "../../../api/utils/query-client";
import { CreateSubtaskType } from "../types/types";

import Swal from "sweetalert2";

const createSubtask = async ({
  title,
  description,
  status,
  taskInfoId,
}: CreateSubtaskType) => {
  const response = await fetch(
    `${API_URL}/stewardship/sub-task?taskInfoId=${taskInfoId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title, description, status }),
    }
  );

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

const useCreateSubtask = () =>
  useMutation({
    mutationFn: createSubtask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["task", "subtask"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useCreateSubtask };
