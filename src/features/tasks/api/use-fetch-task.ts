import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

import { TaskPageResponse } from "../types/types";

const fetchTask = async ({
  taskInfoId,
  subtaskStatus,
}: {
  taskInfoId: string;
  subtaskStatus: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/task-info/${taskInfoId}?subtaskStatus=${subtaskStatus}`,
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
      text: "something-went-wrong",
    });
  }

  const data = await response.json();

  return data as TaskPageResponse;
};

const useFetchTask = ({
  taskInfoId,
  subtaskStatus,
}: {
  taskInfoId: string;
  subtaskStatus: string;
}) =>
  useQuery({
    queryKey: ["task", "subtask", taskInfoId, subtaskStatus],
    queryFn: () => fetchTask({ taskInfoId, subtaskStatus }),
  });

export { useFetchTask };
