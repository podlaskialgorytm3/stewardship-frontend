import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";
import { queryClient } from "../../../../src/api/utils/query-client";

import Swal from "sweetalert2";

const deleteDayRestriction = async ({
  dayRestrictionId,
  groupId,
}: {
  dayRestrictionId: string;
  groupId: string | undefined;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/day-restriction?dayRestrictionId=${dayRestrictionId}&groupId=${groupId}`,
    {
      method: "DELETE",
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

const useDeleteDayRestirction = () =>
  useMutation({
    mutationFn: deleteDayRestriction,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["schedule-rules"] });
      Swal.fire({
        icon: data.type,
        title: data.type,
        text: data.message,
      });
    },
  });

export { useDeleteDayRestirction };
