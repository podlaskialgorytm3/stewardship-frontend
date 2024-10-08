import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchMembers = async ({
  groupId,
  username,
}: {
  groupId: string;
  username: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/group-user/without-creator?groupId=${groupId}&username=${username}`,
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

const useFetchMembers = ({
  groupId,
  username,
}: {
  groupId: string;
  username: string;
}) =>
  useQuery({
    queryFn: () => fetchMembers({ groupId, username }),
    queryKey: ["tasks", groupId, username],
  });

export { useFetchMembers };
