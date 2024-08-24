import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";

import Swal from "sweetalert2";

const fetchRequests = async ({
  groupId,
  username,
}: {
  groupId: string;
  username: string;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/group-user-request?groupId=${groupId}&username=${username}`,
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

const useFetchRequests = ({
  groupId,
  username,
}: {
  groupId: string;
  username: string;
}) =>
  useQuery({
    queryFn: () => fetchRequests({ groupId, username }),
    queryKey: ["groups", "requests", username],
  });

export { useFetchRequests };
