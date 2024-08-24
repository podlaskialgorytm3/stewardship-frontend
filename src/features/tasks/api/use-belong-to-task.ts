import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

const belongToTask = async (taskInfoId: string) => {
  const response = await fetch(
    `${API_URL}/stewardship/task-info/is-belong-to-task/${taskInfoId}`,
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
      text: "Something went wrong!",
    });
  }

  const data = await response.json();

  return data;
};

const useBelongToTask = (taskInfoId: string) =>
  useQuery({
    queryKey: ["tasks", taskInfoId],
    queryFn: () => belongToTask(taskInfoId),
  });

export { useBelongToTask };
