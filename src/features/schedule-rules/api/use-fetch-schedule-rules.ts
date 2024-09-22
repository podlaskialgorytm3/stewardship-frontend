import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";

import Swal from "sweetalert2";

const fetchScheduleRules = async ({ groupId }: { groupId: string }) => {
  const response = await fetch(
    `${API_URL}/stewardship/schedule-rule?groupId=${groupId}`,
    {
      method: "GET",
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
      text: response.statusText,
    });
  }

  const data = await response.json();

  return data;
};

const useFetchScheduleRules = ({ groupId }: { groupId: string }) =>
  useQuery({
    queryFn: () => fetchScheduleRules({ groupId }),
    queryKey: ["schedule-rules", groupId],
  });

export { useFetchScheduleRules };
