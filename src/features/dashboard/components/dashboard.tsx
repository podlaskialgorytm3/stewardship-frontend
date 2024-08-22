import { MenuDashboard } from "./menu-dashboard";
import { Outlet, useLocation } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex items-start w-full">
      <MenuDashboard />
      <div className="w-[1400px]">
        {location.pathname === "/dashboard" && (
          <h1 className="text-xl font-bold">weclome in your dashboard!</h1>
        )}
        <Outlet />
      </div>
    </div>
  );
};
