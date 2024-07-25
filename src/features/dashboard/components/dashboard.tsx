import { MenuDashboard } from "./menu-dashboard";

export const Dashboard: React.FC = () => {
    return (
        <div className="flex items-center flex-col min-h-[50vh]">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <MenuDashboard />
        </div>
    );
}

