import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../api/utils/query-client";
import { API_URL } from "../../../shared/constants/constants";

const logout = async () => {
  const response = await fetch(`${API_URL}/stewardship/user/logout`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    return "Error";
  }

  const data = await response.json();

  return data;
};

const useLogout = () => {
  const navigate = useNavigate();
  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      Swal.fire({
        icon: data.type,
        title: data.type.charAt(0).toUpperCase() + data.type.slice(1),
        text: data.message,
      });
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.reload();
        navigate("/login");
      }, 1000);
    },
  });

  return logoutMutation;
};

export default useLogout;
