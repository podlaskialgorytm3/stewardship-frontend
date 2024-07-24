export const AuthError: React.FC<{children: string}> = ({children}) => {
    return(
        <div className='h-[70vh] flex justify-center items-center'>
            <h1 className='text-5xl font-bold'>
                {children}
            </h1>
        </div>  
    )
}