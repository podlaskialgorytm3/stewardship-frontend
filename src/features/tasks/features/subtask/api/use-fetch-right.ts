import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";

import Swal from "sweetalert2";

export const fetchRight = async (subtaskId: string) => {
  const response = await fetch(
    `${API_URL}/stewardship/sub-task/has-right/${subtaskId}`,
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
      title: "Error",
      text: "Something went wrong",
    });
  }

  const data = await response.json();

  return data;
};

const useFetchRight = (subtaskId: string) =>
  useQuery({
    queryKey: ["rights", subtaskId],
    queryFn: () => fetchRight(subtaskId),
  });

export default useFetchRight;
