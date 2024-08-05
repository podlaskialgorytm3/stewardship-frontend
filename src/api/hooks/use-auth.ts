import  Swal  from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../shared/constants/constants';

const fetchToken = async (token: string) => {
    const response = await fetch(`${API_URL}/stewardship/user/token/validate`, {
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

    const data = await response.json();

    const now = new Date().getTime();
    const expiresIn = localStorage.getItem('expiresIn');   

    return data?.authenticated && now < Number(expiresIn) + 60 * 60 * 1000 + 24;
}

const useAuth = () => {;
    const token = localStorage.getItem('token');
    return useQuery({
        queryKey: ['user', token],
        queryFn: () => fetchToken(token as string)
    });
}

export default useAuth;