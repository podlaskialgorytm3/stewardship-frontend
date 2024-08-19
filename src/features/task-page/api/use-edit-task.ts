import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import { queryClient } from "../../../api/utils/query-client";
import { TaskRequest } from "../types/types";

import Swal from "sweetalert2";

const editTask = async ({
  task,
  taskInfoId,
}: {
  task: TaskRequest;
  taskInfoId: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/task-info/${taskInfoId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(task),
    }
  );

  if (!response.ok) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }

  const data = await response.json();

  return data;
};

const useEditTask = () =>
  useMutation({
    mutationFn: editTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["task"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useEditTask };
