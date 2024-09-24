import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";
import { queryClient } from "../../../../src/api/utils/query-client";

import { CreateScheduleRuleInterface } from "../types/types";

import Swal from "sweetalert2";

const editScheduleRule = async ({
  scheduleRule,
  groupId,
  scheduleRuleId,
}: {
  scheduleRule: CreateScheduleRuleInterface;
  groupId: string | undefined;
  scheduleRuleId: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/schedule-rule/${scheduleRuleId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ ...scheduleRule, groupId }),
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

const useEditScheduleRule = () =>
  useMutation({
    mutationFn: editScheduleRule,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["schedule-rules"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useEditScheduleRule };
