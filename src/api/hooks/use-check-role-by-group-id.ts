import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../shared/constants/constants";

import Swal from "sweetalert2";

const checkRole = async (groupId: string) => {
    const response = await fetch(`${API_URL}/stewardship/group-user/is-admin/${groupId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    if(!response.ok){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong"
        })
    }

    const data = await response.json(); // response true or false true if user is admin

    return data;
}

const useCheckRole = (groupId: string) => (
    useQuery({
        queryFn: () => checkRole(groupId),
        queryKey: ["groups", groupId]
    })
)

export default useCheckRole;