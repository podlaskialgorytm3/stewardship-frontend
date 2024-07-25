import { Groups } from '../../../features/groups/components/groups';
import  useAuth  from '../../../api/hooks/use-auth';
import { AuthError } from '../../../shared/components/auth-error';

const GroupPage: React.FC = () => {
    const { data, isLoading } = useAuth();

    return (
        <div> 
            {(!data?.authenticated && !isLoading) ? 
                    <AuthError>
                        You are not logged in!
                    </AuthError>
                    :
                    <>
                        <Groups />
                    </>
                    }
        </div>
    );
}

export default GroupPage;