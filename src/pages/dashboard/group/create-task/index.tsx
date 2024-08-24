import AuthPage from "../../../auth";
import { Task } from "../../../../features/groups/features/task-management/components/task";

const CreateTaskPage: React.FC = () => (
  <AuthPage>
    <Task />
  </AuthPage>
);

export default CreateTaskPage;
