import { NavLink } from 'react-router-dom';

type NavLinkComponentProps = {
  path: string;
  name: string;
};

export const NavLinkComponent: React.FC<NavLinkComponentProps> = ({path, name}) => {
    return(
        <li className='hover:cursor-pointer'>
            <NavLink
                className='text-purple-800 font-bold w-20 hover:text-white hover:bg-purple-600 px-4 py-2 rounded-3xl'
                to={path}>
                {name}
            </NavLink>
        </li>
    )
}