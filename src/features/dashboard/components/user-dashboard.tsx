import { DashboardElement } from "./dashboard-element";
import { GroupCard } from "./group-card";

export const UserDashboard: React.FC = () => {
  return (
    <div className="w-[100%] mt-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center">
        Welcome to your dashboard!
      </h1>
      <div className="mt-5 w-[80%] flex flex-wrap justify-center">
        <DashboardElement title="your-groups" width={400}>
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </DashboardElement>
        <DashboardElement title="your-tasks" width={400}>
          <GroupCard />
        </DashboardElement>
      </div>
    </div>
  );
};
