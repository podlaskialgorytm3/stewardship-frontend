import  Swal  from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';


const fetchToken = async (token: string) => {
    const response = await fetch('http://localhost:3002/stewardship/user/token/validate', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
        throw new Error('Something went wrong');
    }

    return response.json();
}

const useAuth = () => {
    const token = localStorage.getItem('token');
    return useQuery({
        queryKey: ['user', token],
        queryFn: () => fetchToken(token as string)
    });
}

export default useAuth;