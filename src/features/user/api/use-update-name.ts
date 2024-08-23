import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../api/utils/query-client";
import { API_URL } from "../../../shared/constants/constants";

import Swal from "sweetalert2";

const updateName = async (name: string) => {
  const response = await fetch(`${API_URL}/stewardship/user/name/change`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    Swal.fire({
      title: "Error",
      text: "An error occurred while updating your name",
      icon: "error",
    });
  }

  const data = await response.json();

  return data;
};

const useUpdateName = () =>
  useMutation({
    mutationFn: updateName,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      Swal.fire({
        title: data.type,
        text: data.message,
        icon: data.type,
      });
    },
  });

export default useUpdateName;
