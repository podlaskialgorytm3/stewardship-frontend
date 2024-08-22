import { Outlet } from "react-router-dom";
import { Menu } from "../../features/menu/components/menu";
import { Footer } from "../../features/footer/components/footer";

import { useLocation } from "react-router-dom";

const Root: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {!location.pathname.includes("/dashboard") && <Menu />}
      <Outlet />
      {!location.pathname.includes("/dashboard") && <Footer />}
    </div>
  );
};

export default Root;
