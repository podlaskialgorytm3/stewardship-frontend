import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../api/utils/query-client";
import { API_URL } from "../../../shared/constants/constants";

import Swal from "sweetalert2";

const sendRequest = async (groupId: number) => {
    const response = await fetch(`${API_URL}/stewardship/group-user-request`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({groupId})
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

const useSendRequest = () => (
    useMutation({
        mutationFn: sendRequest,
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['groups']})
            Swal.fire({
                icon: data.type,
                title: data.type,
                text: data.message,
            })
        }
    })
)

export default useSendRequest;