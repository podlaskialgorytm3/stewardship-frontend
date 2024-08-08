import AuthPage from '../../../auth';
import { Task } from '../../../../features/task/components/task';

const CreateTaskPage: React.FC = () => (
    <AuthPage>
        <Task />
    </AuthPage>
)

export default CreateTaskPage; 