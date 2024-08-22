import { NavLinkDashboard } from "../components/nav-link-dashboard";

export const MenuDashboard = () => {
  return (
    <div className="h-[500px] mt-20 pt-10 pb-10 shadow-2xl shadow-purple-400 rounded-r-[30px] flex flex-col items-center">
      <h1 className="text-2xl mb-5">dashboard</h1>
      <NavLinkDashboard path="/dashboard/groups" name="groups" />
      <NavLinkDashboard path="/dashboard/working-hours" name="working-hours" />
      <NavLinkDashboard path="/dashboard/tasks" name="tasks" />
    </div>
  );
};
