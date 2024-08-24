import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import { queryClient } from "../../../../../api/utils/query-client";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const deleteGroup = async ({ id }: { id: string }) => {
  const response = await fetch(`${API_URL}/stewardship/group/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  }

  const data = await response.json();

  return data;
};

const useDeleteGroup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deleteGroup,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["group"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
      navigate("/dashboard/groups");
    },
  });
};

export { useDeleteGroup };
