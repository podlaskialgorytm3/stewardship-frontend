import { Outlet } from "react-router-dom";
import { Menu } from "../../features/menu/components/menu";
import { Footer } from "../../features/footer/components/footer";

const Root: React.FC = () => {
    return (
        <div>
            <Menu />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;  