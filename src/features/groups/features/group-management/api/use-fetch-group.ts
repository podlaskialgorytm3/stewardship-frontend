import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchGroup = async (id: string) => {
  const response = await fetch(`${API_URL}/stewardship/group/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    const message = await response.text();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  }

  const data = await response.json();

  return data.data as {
    name: string;
    category: string;
  };
};

const useFetchGroup = (id: string) =>
  useQuery({
    queryKey: ["group", id],
    queryFn: () => fetchGroup(id),
  });

export default useFetchGroup;
