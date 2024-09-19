import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import { queryClient } from "../../../api/utils/query-client";

import Swal from "sweetalert2";

const updatePosition = async ({
  position,
  memberId,
}: {
  position: string;
  memberId: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/group-user/position?groupUserId=${memberId}&position=${position}`,
    {
      method: "PUT",
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
  }

  const data = await response.json();

  return data;
};

const useUpdatePosition = () =>
  useMutation({
    mutationFn: updatePosition,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useUpdatePosition };
