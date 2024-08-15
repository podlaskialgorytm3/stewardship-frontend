import Swal from "sweetalert2";

const useHandleStatus = ({subtaskId}: {subtaskId: string}) => {
    const handleStatus = (status: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are about to change the status of this subtask",
            icon: "warning",
            input: "select",
            inputOptions: {
                waiting: "waiting",
                "in progress": "in progress",
                done: "done"
            },
            inputValue: status,
        }).then((result) => {
            if (result.isConfirmed) {
                // dispatch action to change the status of the subtask
            }
        });
    }

    return { handleStatus };
}

export default useHandleStatus;