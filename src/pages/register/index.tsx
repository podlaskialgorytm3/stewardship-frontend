import { Register } from "../../features/login/components/register"
import  useAuth  from '../../api/hooks/use-auth';
import { AuthError } from '../../shared/components/auth-error';

const RegisterPage: React.FC = () => {
    const { data, isLoading } = useAuth();
    return (
        <div> 
            {(data?.authenticated && !isLoading) ? 
                    <AuthError>
                        You are  logged in!
                    </AuthError>
                    :
                    <>
                        <Register />
                    </>
                    }
        </div>
    );
}

export default RegisterPage;