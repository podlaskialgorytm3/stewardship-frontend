import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../src/shared/constants/constants";

import Swal from "sweetalert2";

const fetchShifts = async ({ groupId }: { groupId: string }) => {
  const response = await fetch(
    `${API_URL}/stewardship/shift?groupId=${groupId}`,
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

const useFetchShifts = ({ groupId }: { groupId: string }) =>
  useQuery({
    queryFn: () => fetchShifts({ groupId }),
    queryKey: ["shifts", groupId],
  });

export { useFetchShifts };
