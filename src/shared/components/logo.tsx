import LogoImg from '../../assets/logo.webp';
import { NavLink } from 'react-router-dom';

export const Logo: React.FC<{isImage: boolean}> = ({isImage}) => {
    return(
            <NavLink to='/'>
                <h1 className='text-3xl flex justify-center items-center'>
                {isImage ? <img src={LogoImg} alt='logo' className='w-[50px] mr-5'/> : ''}
                stewardship</h1>
            </NavLink>
    )
}