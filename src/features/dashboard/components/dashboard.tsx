import { MenuDashboard } from "./menu-dashboard";
import { Outlet } from "react-router-dom";

export const Dashboard: React.FC = () => {
    return (
        <div className="flex items-center flex-col">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <MenuDashboard />
            <Outlet />
        </div>
    );
}

