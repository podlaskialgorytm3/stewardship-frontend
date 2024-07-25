import Swal from "sweetalert2";
import { User } from "../types/types";

import useUpdateImg from "../api/use-update-img";

const useHandleEdit = ({data} : {data: User}) => {
    const {mutate: mutateImg, isPending: isPendingImg, isError: isErrorImg, error: errorImg} = useUpdateImg();

    const handleImageClick = () => {
        Swal.fire({
            title: "Profile Picture",
            text: "Change profile picture",
            input: "text",
            inputValue: data?.img,
            inputAttributes: {
            autocapitalize: "off",
            type: "url"
            },
            preConfirm: (inputValue) => {
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
            if (!urlRegex.test(inputValue)) {
                Swal.showValidationMessage("Invalid URL");
            }
            }
        }).then((result) => {
            if (result.isConfirmed) {
            const inputValue = result.value;
            mutateImg(inputValue)
            }
        });
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

    return { handleImageClick, handleNameClick, handleEmailClick }
}

export default useHandleEdit;