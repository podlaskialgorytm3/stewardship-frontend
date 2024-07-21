import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../../api/utils/query-client'
import { API_URL } from '../../../shared/constants/constants'

import Swal from 'sweetalert2'


const sendEmail = async (email: string) => {
    const response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: 'POST',
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

    return response.json()
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