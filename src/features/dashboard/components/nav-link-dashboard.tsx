import { NavLink } from "react-router-dom";

type NavLinkDashboard = {
  path: string;
  name: string;
};

export const NavLinkDashboard: React.FC<NavLinkDashboard> = ({
  path,
  name,
}) => {
  return (
    <NavLink
      className="text-center block text-purple-800 font-bold w-[250px] hover:text-white hover:bg-purple-400 px-4 py-2 cursor-pointer"
      to={path}
    >
      {name}
    </NavLink>
  );
};
