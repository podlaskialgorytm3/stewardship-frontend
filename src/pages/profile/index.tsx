import { Profile } from '../../features/user/profile';
import  useAuth  from '../../api/hooks/use-auth';
import { AuthError } from '../../shared/components/auth-error';

const ProfilePage: React.FC = () => {
    const { data, isLoading } = useAuth();

    return (
        <div> 
            {(!data?.authenticated && !isLoading) ? 
                    <AuthError>
                        You are not logged in!
                    </AuthError>
                    :
                    <>
                        <Profile />
                    </>
                    }
        </div>
    );
}

export default ProfilePage;