import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";

import Swal from "sweetalert2";

const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/stewardship/dashboard/tasks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
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

const useFetchTasks = () =>
  useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(),
  });

export { useFetchTasks };
