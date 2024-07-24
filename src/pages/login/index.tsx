import { Login } from '../../features/login/components/login';
import  useAuth  from '../../api/hooks/use-auth';
import { AuthError } from '../../shared/components/auth-error';

const LoginPage: React.FC = () => {
    const { data, isLoading } = useAuth();

    return (
        <div> 
            {(data?.authenticated && !isLoading) ? 
                    <AuthError>
                        You are  logged in!
                    </AuthError>
                    :
                    <>
                        <Login />
                    </>
                    }
        </div>
    );
}

export default LoginPage;