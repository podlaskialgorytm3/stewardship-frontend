import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../api/utils/query-client";
import { API_URL } from "../../../shared/constants/constants";

import Swal from "sweetalert2";

const addSkill = async ({
  skillId,
  groupUserId,
}: {
  skillId: number;
  groupUserId: number;
}) => {
  const response = await fetch(`${API_URL}/stewardship/group-skill`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ skillId, groupUserId }),
  });

  if (!response.ok) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });

    const data = await response.json();

    return data;
  }
};

const useAddSkill = () =>
  useMutation({
    mutationFn: addSkill,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useAddSkill };
