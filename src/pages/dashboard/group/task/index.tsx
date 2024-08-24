import { AuthPage } from "../../../auth";
import { SingleTaskPage } from "../../../../features/tasks/components/single-task-page";

const TaskPage: React.FC = () => (
  <AuthPage>
    <SingleTaskPage />
  </AuthPage>
);

export { TaskPage };
