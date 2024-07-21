import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../../api/utils/query-client';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { LoginForm } from '../types/types';

const login = async (formData: LoginForm) => {
    const response = await fetch('http://localhost:3002/stewardship/user/login', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
        
    });

    if(!response.ok){
        const info = await response.json();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: info.message
        })
    }

    const  data  = await response.json();

    return data;
}

export const useLogin = () => {
    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['user']});
            Swal.fire({
                icon: data.type,
                title: data.type.charAt(0).toUpperCase() + data.type.slice(1),
                text: data.message
            })
            localStorage.setItem('token', data.token);
            navigate('/');
        }
    });
    
    return loginMutation;
}