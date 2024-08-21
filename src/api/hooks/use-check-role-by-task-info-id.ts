import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../shared/constants/constants";

import Swal from "sweetalert2";

const checkRoleByTaskInfoId = async (taskInfoId: string | undefined) => {
  const response = await fetch(
    `${API_URL}/stewardship/task-info/is-admin/${taskInfoId}`,
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
      title: "Error",
      text: "Something went wrong",
    });
  }

  const data = await response.json();

  return data;
};

const useCheckRoleByTasInfokId = (taskInfoId: string | undefined) =>
  useQuery({
    queryFn: () => checkRoleByTaskInfoId(taskInfoId),
    queryKey: ["groups", taskInfoId],
  });

export default useCheckRoleByTasInfokId;
