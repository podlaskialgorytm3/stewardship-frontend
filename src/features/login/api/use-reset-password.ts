import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import { queryClient } from "../../../api/utils/query-client";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const resetPassword = async ({
  password: newPassword,
  token: resetPasswordToken,
}: {
  password: string;
  token: string;
}) => {
  const response = await fetch(`${API_URL}/stewardship/user/password/reset`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newPassword,
      resetPasswordToken,
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

const useResetPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
      navigate("/login");
    },
  });
};

export default useResetPassword;
