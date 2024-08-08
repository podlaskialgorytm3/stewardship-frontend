import AuthPage from '../../../auth';
import { CreateTask } from '../../../../features/task/components/create-task';

const CreateTaskPage: React.FC = () => (
    <AuthPage>
        <CreateTask />
    </AuthPage>
)

export default CreateTaskPage; 