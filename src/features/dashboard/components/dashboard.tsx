import { MenuDashboard } from "./menu-dashboard";
import { Outlet, useLocation } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl font-bold"></h1>
      <MenuDashboard />
      <Outlet />
      {location.pathname === "/dashboard" && (
        <h1 className="mt-10 text-3xl font-bold">welcome-in-your-dashboard</h1>
      )}
    </div>
  );
};
