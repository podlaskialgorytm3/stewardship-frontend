import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../../api/utils/query-client'
import { API_URL } from '../../../shared/constants/constants'

import Swal from 'sweetalert2'


const sendEmail = async (email: string) => {
    const response = await fetch(`${API_URL}/stewardship/user/password/reset`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })

    if(!response.ok){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    }

    const data = await response.json();

    console.log(data)
    return data;
}

const useSendEmail = () => (
    useMutation({
        mutationFn: sendEmail,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['user']});
            Swal.fire({
                icon: data.type,
                title: data.type.charAt(0).toUpperCase() + data.type.slice(1),
                text: data.message
            });
        },
        onError: (error: any) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error?.message
            })
        }
    })
)

export default useSendEmail;