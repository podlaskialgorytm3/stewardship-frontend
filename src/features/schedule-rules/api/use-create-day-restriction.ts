import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";
import { queryClient } from "../../../../src/api/utils/query-client";

import { DayRestrictionInterface } from "../types/types";

import Swal from "sweetalert2";

const createDayRestriction = async ({
  scheduleRuleId,
  groupId,
  dayRestriction,
}: {
  scheduleRuleId: string;
  groupId: string | undefined;
  dayRestriction: DayRestrictionInterface;
}) => {
  const response = await fetch(`${API_URL}/stewardship/day-restriction`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ ...dayRestriction, scheduleRuleId, groupId }),
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

const useCreateDayRestriction = () =>
  useMutation({
    mutationFn: createDayRestriction,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["schedule-rules"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useCreateDayRestriction };
