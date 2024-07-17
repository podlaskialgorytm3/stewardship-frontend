import { NavLink, useNavigate } from 'react-router-dom';

export const Menu = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white">
            <nav className='text-purple-800 flex justify-center h-[100px]'>
                <ul className='flex justify-between w-[1000px] items-center'>
                    <li>
                        <h1 className='text-2xl'>stewardship</h1>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <button onClick={() => navigate('/login')}>Login</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}