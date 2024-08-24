import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchUsers = async ({
  groupId,
  username,
}: {
  groupId: string | undefined;
  username: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/group-user-request/not-added-users?groupId=${groupId}&username=${username}`,
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

const useFetchUsers = ({
  groupId,
  username,
}: {
  groupId: string | undefined;
  username: string;
}) =>
  useQuery({
    queryKey: ["groups", "users", username],
    queryFn: () => fetchUsers({ groupId, username }),
  });

export default useFetchUsers;
