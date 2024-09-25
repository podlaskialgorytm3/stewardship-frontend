import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import { queryClient } from "../../../api/utils/query-client";

import Swal from "sweetalert2";

const setScheduleRule = async ({
  groupUserId,
  scheduleRuleId,
}: {
  groupUserId: string;
  scheduleRuleId: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/schedule-rule?scheduleRuleId=${scheduleRuleId}&groupUserId=${groupUserId}`,
    {
      method: "POST",
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

const useSetScheduleRule = () =>
  useMutation({
    mutationFn: setScheduleRule,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["schedule-rules"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useSetScheduleRule };
