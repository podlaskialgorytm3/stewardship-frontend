import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchMembers = async ({groupId, username}: {groupId: string, username: string}) => {
    const response = await fetch(`${API_URL}/stewardship/group-user`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({groupId, username})
    })

    if(!response.ok){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    }

    const data = await response.json();

    return data;
}

const useFetchMembers = ({groupId, username}: {groupId: string, username: string}) => (
    useQuery({
        queryFn: () => fetchMembers({groupId, username}),
        queryKey: ["groups", groupId, username]
    })
)

export default useFetchMembers;