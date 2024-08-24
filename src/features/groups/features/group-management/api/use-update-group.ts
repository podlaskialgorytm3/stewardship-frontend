import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import { queryClient } from "../../../../../api/utils/query-client";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const updateGroup = async ({
  id,
  name,
  category,
}: {
  id: string;
  name: string;
  category: string;
}) => {
  const response = await fetch(`${API_URL}/stewardship/group/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, category }),
  });

  if (!response.ok) {
    Swal.fire({
      title: "Error!",
      text: "Failed to update group",
      icon: "error",
    });
  }

  const data = await response.json();

  return data;
};

const useUpdateGroup = (id: string) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: updateGroup,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["group", updateGroup] });
      Swal.fire({
        title: data.type,
        text: data.message,
        icon: data.type,
      });
      navigate(`/dashboard/groups/${id}`);
    },
  });
};

export default useUpdateGroup;
