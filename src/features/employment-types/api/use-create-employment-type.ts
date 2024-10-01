import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";
import { queryClient } from "../../../../src/api/utils/query-client";

import { CreateEmploymentTypeInterface } from "../types/types";

import Swal from "sweetalert2";

const createEmploymentType = async ({
  groupId,
  employmentType,
}: {
  groupId: string | undefined;
  employmentType: CreateEmploymentTypeInterface;
}) => {
  const response = await fetch(`${API_URL}/stewardship/employment-type`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ ...employmentType, groupId }),
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

const useCreateEmploymentType = () =>
  useMutation({
    mutationFn: createEmploymentType,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["employment-types"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useCreateEmploymentType };
