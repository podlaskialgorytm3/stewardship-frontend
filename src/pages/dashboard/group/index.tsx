import  useAuth  from '../../../api/hooks/use-auth';
import { AuthError } from '../../../shared/components/auth-error';
import { SingleGroupPage } from '../../../features/groups/components/single-group-page';

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
                        <SingleGroupPage />
                    </>
                    }
        </div>
    );
}

export default GroupPage;