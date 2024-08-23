import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../api/utils/query-client";
import { API_URL } from "../../../shared/constants/constants";

import Swal from "sweetalert2";

const updateImg = async (img: string) => {
  const response = await fetch(`${API_URL}/stewardship/user/img/change`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ img }),
  });

  if (!response.ok) {
    Swal.fire({
      title: "Error",
      text: "Something went wrong",
      icon: "error",
    });
  }

  const data = await response.json();

  return data;
};

const useUpdateImg = () =>
  useMutation({
    mutationFn: updateImg,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      Swal.fire({
        title: data.type,
        text: data.message,
        icon: data.type,
      });
    },
  });

export default useUpdateImg;
