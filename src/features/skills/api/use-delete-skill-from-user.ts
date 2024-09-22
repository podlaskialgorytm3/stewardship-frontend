import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import { queryClient } from "../../../api/utils/query-client";

import Swal from "sweetalert2";

const deleteSkill = async ({
  skillId,
  groupUserId,
}: {
  skillId: string;
  groupUserId: number;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/group-skill?skillId=${skillId}&groupUserId=${groupUserId}`,
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
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });

    const data = await response.json();

    return data;
  }
};

const useDeleteSkill = () =>
  useMutation({
    mutationFn: deleteSkill,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useDeleteSkill };
