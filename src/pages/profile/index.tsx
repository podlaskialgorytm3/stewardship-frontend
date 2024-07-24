import { Profile } from '../../features/user/profile';
import  useAuth  from '../../api/hooks/use-auth';
import { ErrorInfo } from '../../features/login/components/error';

const ProfilePage: React.FC = () => {
    const { data, isLoading } = useAuth();

    return (
        <div> 
            {(!data?.authenticated && !isLoading) ? 
                    <ErrorInfo>
                        You are not logged in!
                    </ErrorInfo>
                    :
                    <>
                        <Profile />
                    </>
                    }
        </div>
    );
}

export default ProfilePage;