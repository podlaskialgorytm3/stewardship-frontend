import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import { queryClient } from "../../../api/utils/query-client";

import Swal from "sweetalert2";

const createSkill = async ({
  skill,
  isRemote,
  groupId,
}: {
  skill: string;
  isRemote: boolean;
  groupId: string | undefined;
}) => {
  const response = await fetch(`${API_URL}/stewardship/skill`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      skillName: skill,
      isRemote,
      groupId,
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
  console.log(data);

  return data;
};

const useCreateSkill = () =>
  useMutation({
    mutationFn: createSkill,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useCreateSkill };
