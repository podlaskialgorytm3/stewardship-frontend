import { NavLink } from "react-router-dom";

type NavLinkType = {
  path: string;
  name: string;
};

export const NavLinkDashboard: React.FC<NavLinkType> = ({ path, name }) => {
  return (
    <NavLink
      className="text-center block text-purple-800 font-bold w-[300px] h-[50px] leading-[35px] hover:text-white hover:bg-purple-500 px-4 py-2 cursor-pointer"
      to={path}
    >
      {name}
    </NavLink>
  );
};
