import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../../../shared/constants/constants";
import { queryClient } from "../../../../../api/utils/query-client";
import {
  TaskInterface,
  SubtaskInterface,
  TaskAffilationInterface,
} from "../types/types";

import Swal from "sweetalert2";

const createTask = async ({
  taskInfo,
  subtasks,
  taskAffilations,
  groupId,
}: {
  taskInfo: TaskInterface;
  subtasks: SubtaskInterface[];
  taskAffilations: TaskAffilationInterface[];
  groupId: string;
}) => {
  const response = await fetch(`${API_URL}/stewardship/task-info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      taskInfo,
      subtasks,
      taskAffilations,
      groupId,
    }),
  });

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

const useCreateTask = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
      navigate(-1);
    },
  });
};

export { useCreateTask };
