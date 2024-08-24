import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

const belongGroup = async (groupId: string) => {
  const response = await fetch(
    `${API_URL}/stewardship/group-user/is-member/${groupId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
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

const useBelongGroup = (groupId: string) => {
  return useQuery({
    queryKey: ["groups"],
    queryFn: () => belongGroup(groupId),
  });
};

export { useBelongGroup };
