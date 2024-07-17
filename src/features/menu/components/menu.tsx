import { NavLinkComponent } from './nav-link';

export const Menu = () => {

    return (
        <div>
            <nav className='text-purple-800 flex justify-center h-[100px]'>
                <ul className='flex justify-between w-[700px] items-center'>
                    <li>
                        <h1 className='text-3xl'>stewardship</h1>
                    </li>
                    <NavLinkComponent path="/" name="Home"/>
                    <NavLinkComponent path="/login" name="Login"/>
                    <NavLinkComponent path="/register" name="Register"/>
                </ul>
            </nav>
        </div>
    );
}