import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchSkills = async ({ groupId }: { groupId: string | undefined }) => {
  const response = await fetch(
    `${API_URL}/stewardship/skill?groupId=${groupId}`,
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

  console.log(data);

  return data;
};

const useFetchSkills = ({ groupId }: { groupId: string | undefined }) =>
  useQuery({
    queryFn: () => fetchSkills({ groupId }),
    queryKey: ["skills", groupId],
  });

export { useFetchSkills };
