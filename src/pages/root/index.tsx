import { Outlet } from "react-router-dom";
import { Menu } from "../../features/menu/components/menu";

const Root: React.FC = () => {
    return (
        <div className="">
            <Menu />
            <Outlet />
        </div>
    );
}

export default Root;  