import { Dashboard } from '@mui/icons-material';
import  useAuth  from '../../api/hooks/use-auth';
import { AuthError } from '../../shared/components/auth-error';

const DashboardPage: React.FC = () => {
    const { data, isLoading } = useAuth();

    return (
        <div> 
            {(!data?.authenticated && !isLoading) ? 
                    <AuthError>
                        You are not logged in!
                    </AuthError>
                    :
                    <>
                        <Dashboard />
                    </>
                    }
        </div>
    );
}

export default DashboardPage;