import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchBelongingSkills = async ({
  groupUserId,
}: {
  groupUserId: number;
}) => {
  const response = await fetch(
    `${API_URL}/stewardship/group-skill/belonging?groupUserId=${groupUserId}`,
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

  const data = (await response.json()) as
    | { id: string; skillName: string }[]
    | [];

  return data;
};

const useFetchBelongingSkills = ({ groupUserId }: { groupUserId: number }) =>
  useQuery({
    queryFn: () => fetchBelongingSkills({ groupUserId }),
    queryKey: ["skills", "belonging", groupUserId],
  });

export { useFetchBelongingSkills };
