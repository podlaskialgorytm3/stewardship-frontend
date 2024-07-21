import { NavLinkComponent } from './nav-link';
import { Logo } from '../../../shared/components/logo';
import useAuth from '../../../api/hooks/use-auth';

export const Menu = () => {
    const { data, isLoading } = useAuth();

    return (
        <div>
            <nav className='text-purple-800 flex justify-center h-[100px]'>
                <ul className='flex justify-between w-[700px] items-center'>
                    <Logo isImage={false}/>
                    <NavLinkComponent path="/" name="Home"/>
                    {(data && !isLoading) ? 
                    <>
                        <NavLinkComponent path="/profile" name="Profile"/>
                        <NavLinkComponent path="/logout" name="Logout"/> 
                    </>  
                    :
                    <>
                        <NavLinkComponent path="/login" name="Login"/>
                        <NavLinkComponent path="/register" name="Register"/>
                    </>
                    }
                </ul>
            </nav>
        </div>
    );
}