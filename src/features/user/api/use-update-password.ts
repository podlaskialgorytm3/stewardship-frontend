import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../api/utils/query-client";
import { API_URL } from "../../../shared/constants/constants";

import Swal from "sweetalert2";

const updatePassword = async ({
  oldPassword,
  newPassword,
}: {
  oldPassword: string;
  newPassword: string;
}) => {
  const response = await fetch(`${API_URL}/stewardship/user/password/change`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ oldPassword, newPassword }),
  });

  if (!response.ok) {
    Swal.fire({
      title: "Error",
      text: "An error occurred while updating your password",
      icon: "error",
    });
  }

  const data = await response.json();

  return data;
};

const useUpdatePassword = () =>
  useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      Swal.fire({
        title: data.type,
        text: data.message,
        icon: data.type,
      });
    },
  });

export { useUpdatePassword };
