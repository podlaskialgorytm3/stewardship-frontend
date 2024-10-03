import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";
import { queryClient } from "../../../../src/api/utils/query-client";

import { CreateEmploymentTypeInterface } from "../types/types";

import Swal from "sweetalert2";

const editEmploymentType = async ({
  employmentType,
  groupId,
  employmentTypeId,
}: {
  employmentType: CreateEmploymentTypeInterface;
  groupId: string | undefined;
  employmentTypeId: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/employment-type/${employmentTypeId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ ...employmentType, groupId }),
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

const useEditEmploymentType = () =>
  useMutation({
    mutationFn: editEmploymentType,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["employment-types"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useEditEmploymentType };
