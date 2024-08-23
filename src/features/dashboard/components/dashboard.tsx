import { MenuDashboard } from "./menu-dashboard";
import { UserDashboard } from "./user-dashboard";

import { Outlet, useLocation } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex items-start w-full">
      <div className="w-[350px]">
        <MenuDashboard />
      </div>
      <div className="w-[1400px] min-h-[90vh]">
        {location.pathname === "/dashboard" && <UserDashboard />}
        <Outlet />
      </div>
    </div>
  );
};
