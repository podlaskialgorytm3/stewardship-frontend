import AuthPage from '../../auth';
import { SingleGroupPage } from '../../../features/groups/components/single-group-page';

const GroupPage: React.FC = () => (
    <AuthPage>
        <SingleGroupPage />
    </AuthPage>
)

export default GroupPage;