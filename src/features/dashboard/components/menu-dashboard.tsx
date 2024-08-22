import { NavLinkComponent } from "../../menu/components/nav-link";

export const MenuDashboard = () => {
  return (
    <ul className="mt-5 flex items-center justify-between w-[50%]">
      <NavLinkComponent path="/dashboard/groups" name="groups" />
      <NavLinkComponent path="/dashboard/working-hours" name="working-hours" />
      <NavLinkComponent path="/dashboard/tasks" name="tasks" />
    </ul>
  );
};
