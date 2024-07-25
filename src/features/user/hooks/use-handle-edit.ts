import Swal from "sweetalert2";

const useHandleEdit = ({data} : {data: any}) => {
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
            Swal.fire(`Profile picture: ${inputValue}`);
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