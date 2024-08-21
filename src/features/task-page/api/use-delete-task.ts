import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../../../shared/constants/constants";
import { queryClient } from "../../../api/utils/query-client";

import Swal from "sweetalert2";

const deleteTask = async (taskInfoId: string | undefined) => {
  const response = await fetch(
    `${API_URL}/stewardship/task-info/${taskInfoId}`,
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
      text: "Something went wrong",
      icon: "error",
    });
  }

  const data = await response.json();

  return data;
};

const useDeleteTask = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deleteTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["task"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
      setTimeout(() => {
        navigate(-1);
      }, 1000);
    },
  });
};

export { useDeleteTask };
