import { useFetchUser } from "../api/use-fetch-user";
import Loading from "../../../shared/components/loading";
import Swal from "sweetalert2";

export const Profile: React.FC = () => {
    const { data, isLoading } = useFetchUser();

    const handleImageClick = () => {
        Swal.fire({
            title: "Profile Picture",
            text: "Change profile picture",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
                type: "url"
            },
        })
    }

    const handleNameClick = () => {
        Swal.fire({
            title: "Name",
            text: "Change name",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
            },
        })
    }

    const handleEmailClick = () => {
        Swal.fire({
            title: "Email",
            text: "Change email",
            input: "email",
            inputAttributes: {
                autocapitalize: "off",
            },
        })
    }


    return(
        <div className="min-h-[50vh] flex justify-center items-center flex-col">
            {isLoading && <Loading  size={100}/>}
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold">Profile</h1>
                <div className="flex flex-col items-center">
                    <img 
                        src={data?.img} 
                        alt={data?.name} 
                        className="w-[150px] h-[150px] rounded-[50%] mt-10" 
                        onClick={() => handleImageClick()}
                    />
                    <p 
                        className="text-3xl mt-10 font-bold"
                        onClick={() => handleNameClick()}
                    >{data?.name}</p>
                    <p 
                        className="text-2xl mt-10"
                        onClick={() => handleEmailClick()}
                    >{data?.email}</p>
                </div>
            </div>
        </div>
    )
}