import { useMutation } from '@tanstack/react-query'
import { API_URL } from '../../../shared/constants/constants'
import { queryClient } from '../../../api/utils/query-client'
import Swal from 'sweetalert2'

const addUser = async ({groupId, userId}: {groupId: string | undefined; userId: number}) => {
    const response = await fetch(`${API_URL}/stewardship/group-user/invite`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            groupId,
            userId
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

const useAddUser = () => (
    useMutation({
        mutationFn: addUser,
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ["groups"]})
            Swal.fire({
                icon: data.type,
                title: data.type,
                text: data.message,
            })
        }
    })
)

export default useAddUser;