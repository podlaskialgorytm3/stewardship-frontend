import { MenuDashboard } from "./menu-dashboard";
import { Outlet, useLocation } from "react-router-dom";

export const Dashboard: React.FC = () => {
    const location = useLocation();
    return (
        <div className="flex items-center flex-col">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <MenuDashboard />
            <Outlet />
            {location.pathname === "/dashboard" && <h1 className="text-3xl font-bold">Welcome to your dashboard</h1>}
        </div>
    );
}
