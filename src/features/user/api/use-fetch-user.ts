import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchUser = async () => {
  const response = await fetch(`${API_URL}/stewardship/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

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

const useFetchUser = () => {
  return useQuery({
    queryKey: ["user", "fetch"],
    queryFn: () => fetchUser(),
  });
};

export { useFetchUser };
