import  useAuth  from '../../../api/hooks/use-auth';
import { AuthError } from '../../../shared/components/auth-error';
import { CreateGroup } from '../../../features/groups/components/create-group';

const CreateGroupPage: React.FC = () => {
    const { data, isLoading } = useAuth();
    return (
        <div> 
            {(!data?.authenticated && !isLoading) ? 
                    <AuthError>
                        You are not logged in!
                    </AuthError>
                    :
                    <>
                        <CreateGroup />
                    </>
                    }
        </div>
    );
}

export default CreateGroupPage;