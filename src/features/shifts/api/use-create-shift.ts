import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";
import { queryClient } from "../../../../src/api/utils/query-client";

import { CreateShiftInterface } from "../types/types";

import Swal from "sweetalert2";

const createShift = async ({
  shift,
  groupId,
}: {
  shift: CreateShiftInterface;
  groupId: string | undefined;
}) => {
  const response = await fetch(`${API_URL}/stewardship/shift`, {
    method: "POST",
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

const useCreateShift = () =>
  useMutation({
    mutationFn: createShift,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["shifts"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useCreateShift };
