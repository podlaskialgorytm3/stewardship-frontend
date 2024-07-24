import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchUser = async () => {
    const response = await fetch(`${API_URL}/stewardship/user/${localStorage.getItem("token")}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });

    if (!response.ok) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
        });
    }

    return response.json();
}

export const useFetchUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => fetchUser(),
    })
}