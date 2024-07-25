import { useFetchUser } from "../api/use-fetch-user";
import Loading from "../../../shared/components/loading";
import useHandleEdit from "../hooks/use-handle-edit";


export const Profile: React.FC = () => {
    const { data, isLoading } = useFetchUser();
    const { handleImageClick, handleNameClick, handleEmailClick, handlePasswordClick } = useHandleEdit({data});

    return(
        <div className="min-h-[50vh] flex justify-center items-center flex-col">
            {isLoading && <Loading  size={100}/>}
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold">Profile</h1>
                <div className="flex flex-col items-center">
                {(data || !isLoading) && 
                <img 
                    src={data.img ? data.img : ""} 
                    alt="profile" 
                    className="w-[200px] h-[200px] rounded-full object-cover border-[#7e007e] border-[3px] mt-10"
                    onClick={() => handleImageClick()}
                    />
                }
                    <p 
                        className="text-3xl mt-10 font-bold"
                        onClick={() => handleNameClick()}
                        >{data?.name}
                    </p>
                    <p 
                        className="text-2xl mt-10"
                        onClick={() => handleEmailClick()}
                        >{data?.email}
                    </p>
                    <p 
                        className="text-xl mt-10 hover:font-bold"
                        onClick={() => handlePasswordClick()}
                        >Change Password
                    </p>
                </div>
            </div>
        </div>
    )
}