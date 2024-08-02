import { useMutation } from '@tanstack/react-query';
import { API_URL } from '../../../shared/constants/constants';
import { queryClient } from '../../../api/utils/query-client';

import Swal from 'sweetalert2';

const changeStatus = async ({groupId, userId, status} : {groupId: string, userId: number, status: string}) => {
    const response = await fetch(`${API_URL}/stewardship/group-user-request`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            groupId,
            userId,
            status
        })
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

const useChangeStatus = () => (
    useMutation({
        mutationFn: changeStatus,
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ["groups"]});
            Swal.fire({
                icon: data.type,
                title: data.type,
                text: data.message
            })
        }
    })
)

export default useChangeStatus;