import { RegisterForm } from "../types/types";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../api/utils/query-client";
import { useNavigate } from "react-router-dom";

const register = async (userData: RegisterForm) => {
  const response = await fetch(`${API_URL}/stewardship/user`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const info = await response.json();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: info.message,
    });
  }

  const data = await response.json();

  return data;
};

const useRegister = () => {
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      Swal.fire({
        icon: data.type,
        title: data.type.charAt(0).toUpperCase() + data.type.slice(1),
        text: data.message,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    },
  });

  return registerMutation;
};

export default useRegister;
