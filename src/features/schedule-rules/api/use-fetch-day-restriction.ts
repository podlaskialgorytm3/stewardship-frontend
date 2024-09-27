import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchDayRestriction = async ({
  scheduleRuleId,
}: {
  scheduleRuleId: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/day-restriction?scheduleRuleId=${scheduleRuleId}`,
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

const useFetchDayRestriction = ({
  scheduleRuleId,
}: {
  scheduleRuleId: string;
}) =>
  useQuery({
    queryFn: () => fetchDayRestriction({ scheduleRuleId }),
    queryKey: ["schedule-rules"],
  });

export { useFetchDayRestriction };
