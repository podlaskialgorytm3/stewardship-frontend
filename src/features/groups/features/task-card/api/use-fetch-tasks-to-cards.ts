import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchTasksToCards = async ({
  groupId,
  status,
}: {
  groupId: string | undefined;
  status: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/task-info?groupId=${groupId}&taskStatus=${status}`,
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

const useFetchTasksToCards = ({
  groupId,
  status,
}: {
  groupId: string | undefined;
  status: string;
}) =>
  useQuery({
    queryKey: ["groups", "tasks", groupId, status],
    queryFn: () =>
      fetchTasksToCards({ groupId, status } as {
        groupId: string | undefined;
        status: string;
      }),
  });

export default useFetchTasksToCards;
