import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import { queryClient } from "../../../../../api/utils/query-client";

import Swal from "sweetalert2";

const updateStatus = async ({
  subtaskId,
  status,
}: {
  subtaskId: string;
  status: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/sub-task/change-status/${subtaskId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ status }),
    }
  );

  if (!response.ok) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong",
    });
  }

  const data = await response.json();

  return data;
};

const useUpdateStatus = () =>
  useMutation({
    mutationFn: updateStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["task", "subtask"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export default useUpdateStatus;
