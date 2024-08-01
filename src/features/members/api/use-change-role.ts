import { useMutation } from '@tanstack/react-query';
import { API_URL } from '../../../shared/constants/constants';
import { queryClient } from '../../../api/utils/query-client';

import Swal from 'sweetalert2';

const changeRole = async ({memberId, groupId}: {memberId: string, groupId: string}) => {
    const response = await fetch(`${API_URL}/stewardship/group-user/change-role`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({groupId,userId: memberId})
    })

    if(!response.ok){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong"
        })
    }

    const data = await response.json();

    return data;
}

const useChangeRole = () => (
    useMutation({
        mutationFn: changeRole,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["groups"]});
        }
    })
)

export default useChangeRole;