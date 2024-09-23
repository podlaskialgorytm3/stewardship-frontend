import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";
import { queryClient } from "../../../../src/api/utils/query-client";

import { CreateScheduleRuleInterface } from "../types/types";

import Swal from "sweetalert2";

const createScheduleRule = async ({
  scheduleRule,
  groupId,
}: {
  scheduleRule: CreateScheduleRuleInterface;
  groupId: string | undefined;
}) => {
  const response = await fetch(`${API_URL}/stewardship/schedule-rule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ ...scheduleRule, groupId }),
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

const useCreateScheduleRule = () =>
  useMutation({
    mutationFn: createScheduleRule,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["schedule-rules"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useCreateScheduleRule };
