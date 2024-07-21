import { Login } from '../../features/login/components/login';
import  useAuth  from '../../api/hooks/use-auth';
import { ErrorInfo } from '../../features/login/components/error';

const LoginPage: React.FC = () => {
    const { data, isLoading } = useAuth();

    return (
        <div> 
            {(data?.authenticated && !isLoading) ? 
                    <ErrorInfo>
                        You are  logged in!
                    </ErrorInfo>
                    :
                    <>
                        <Login />
                    </>
                    }
        </div>
    );
}

export default LoginPage;