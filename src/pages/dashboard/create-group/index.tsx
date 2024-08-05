import { CreateGroup } from '../../../features/groups/components/create-group';
import AuthPage from '../../auth';

const CreateGroupPage: React.FC = () => (
    <AuthPage>
        <CreateGroup />
    </AuthPage>
)

export default CreateGroupPage;