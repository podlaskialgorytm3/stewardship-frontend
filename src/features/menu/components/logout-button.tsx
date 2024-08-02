import  useLogout  from '../../../features/login/api/use-logout';
import { useNavigate } from 'react-router-dom';

export const LogoutButton: React.FC<{children: string}> = ({children}) => {
    const { mutate } = useLogout();
    const  navigate  = useNavigate();
    const handleClick = () => {
        mutate();
        navigate('/')
    }
    return (
        <li>
            <button
            className='text-purple-800 font-bold w-20 flex hover:text-white hover:bg-purple-600 px-3 py-2 rounded-3xl '
            onClick={handleClick}
            >{children}
            </button>
        </li>
    )
}