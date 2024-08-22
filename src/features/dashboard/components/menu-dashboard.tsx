import { NavLinkDashboard } from "../components/nav-link-dashboard";
import { Logo } from "../../../shared/components/logo";

export const MenuDashboard = () => {
  return (
    <div className="fixed h-[90vh] ml-10 mt-10 pt-10 shadow-2xl shadow-purple-900 rounded-[30px] flex flex-col items-center bg-purple-100 z-10">
      <Logo isImage={false} />
      <br />
      <NavLinkDashboard path="/dashboard/groups" name="groups" />
      <NavLinkDashboard
        path="/dashboard/working-schedule"
        name="working-schedule"
      />
    </div>
  );
};
