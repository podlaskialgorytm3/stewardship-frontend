import LogoImg from '../../assets/logo.webp';

export const Logo: React.FC<{isImage: boolean}> = ({isImage}) => {
    return(
            <h1 className='text-3xl flex justify-center items-center'>
                {isImage ? <img src={LogoImg} alt='logo' className='w-[50px] mr-5'/> : ''}
                stewardship</h1>
    )
}