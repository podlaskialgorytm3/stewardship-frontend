import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import { Member } from "../types/types";
import Swal from "sweetalert2";

const fetchMembersOffTask = async ({
  taskInfoId,
  username,
}: {
  taskInfoId: string | undefined;
  username: string;
}) => {
  const resposne = await fetch(
    `${API_URL}/stewardship/task-affilation/off-task?taskInfoId=${taskInfoId}&username=${username}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!resposne.ok) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }

  const data = await resposne.json();

  return data as Member[];
};

const useFetchMembersOffTask = ({
  taskInfoId,
  username,
}: {
  taskInfoId: string | undefined;
  username: string;
}) =>
  useQuery({
    queryKey: ["members", "members-off-task", username],
    queryFn: () => fetchMembersOffTask({ taskInfoId, username }),
  });

export { useFetchMembersOffTask };
