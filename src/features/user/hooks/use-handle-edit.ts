import Swal from "sweetalert2";
import { User } from "../types/types";

import useUpdateImg from "../api/use-update-img";
import useUpdateName from "../api/use-update-name";

import useErrorMessage from "../../../shared/hooks/use-error-message";

const useHandleEdit = ({data} : {data: User}) => {
    const {mutate: mutateImg,  isError: isErrorImg, error: errorImg} = useUpdateImg();
    const {mutate: mutateName, isError: isErrorName, error: errorName} = useUpdateName();

    const handleImageClick = () => {
        Swal.fire({
            title: "Profile Picture",
            text: "Change profile picture",
            input: "text",
            inputValue: data?.img,
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
            inputValue: data?.name,
            preConfirm: (inputValue) => {
                if (!inputValue) {
                    Swal.showValidationMessage("Name is required");
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const inputValue = result.value;
                mutateName(inputValue)
            }
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

    useErrorMessage({isError: isErrorImg, error: errorImg} as {isError: boolean, error: Error});
    useErrorMessage({isError: isErrorName, error: errorName} as {isError: boolean, error: Error});

    return { handleImageClick, handleNameClick, handleEmailClick }
}

export default useHandleEdit;