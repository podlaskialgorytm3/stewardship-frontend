import { Dashboard } from '../../features/dashboard/components/dashboard';
import AuthPage from '../auth';

const DashboardPage: React.FC = () => (
    <AuthPage>
        <Dashboard />
    </AuthPage>
)

export default DashboardPage;