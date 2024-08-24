import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import { queryClient } from "../../../../../api/utils/query-client";

import Swal from "sweetalert2";

const deleteMember = async ({
  memberId,
  groupId,
}: {
  memberId: number;
  groupId: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/group-user?groupId=${groupId}&memberId=${memberId}`,
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
      title: "Error",
      text: "Something went wrong",
    });
  }

  const data = await response.json();

  return data;
};

const useDeleteMember = () =>
  useMutation({
    mutationFn: deleteMember,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      Swal.fire({
        title: data.type,
        text: data.message,
        icon: data.type,
        confirmButtonColor: "#7e007e",
      });
    },
  });

export default useDeleteMember;
