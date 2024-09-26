import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";
import { queryClient } from "../../../../src/api/utils/query-client";

import { CreateShiftInterface } from "../types/types";

import Swal from "sweetalert2";

const editShift = async ({
  shift,
  groupId,
  shiftId,
}: {
  shift: CreateShiftInterface;
  groupId: string | undefined;
  shiftId: string;
}) => {
  const response = await fetch(`${API_URL}/stewardship/shift/${shiftId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ ...shift, groupId }),
  });

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

const useEditShfit = () =>
  useMutation({
    mutationFn: editShift,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["shifts"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useEditShfit };
