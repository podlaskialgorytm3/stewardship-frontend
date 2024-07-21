import { Register } from "../../features/login/components/register"
import  useAuth  from '../../api/hooks/use-auth';
import { ErrorInfo } from '../../features/login/components/error';

const RegisterPage: React.FC = () => {
    const { data, isLoading } = useAuth();
    return (
        <div> 
            {(data?.authenticated && !isLoading) ? 
                    <ErrorInfo>
                        You are  logged in!
                    </ErrorInfo>
                    :
                    <>
                        <Register />
                    </>
                    }
        </div>
    );
}

export default RegisterPage;