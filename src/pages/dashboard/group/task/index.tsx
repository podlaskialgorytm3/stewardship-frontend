import AuthPage from '../../../auth';
import { SingleTaskPage } from '../../../../features/task/components/single-task-page';

const TaskPage: React.FC = () => (
    <AuthPage>
       <SingleTaskPage />
    </AuthPage>
)

export default TaskPage; 