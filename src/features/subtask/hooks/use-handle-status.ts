import Swal from "sweetalert2";
import useUpdateStatus from "../api/use-update-status";

const useHandleStatus = ({ status }: { status: string }) => {
  const { mutate } = useUpdateStatus();

  const handleStatus = (subtaskId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to change the status of this subtask",
      icon: "warning",
      input: "select",
      inputOptions: {
        waiting: "waiting",
        "in progress": "in progress",
        done: "done",
      },
      inputValue: status,
    }).then((result) => {
      if (result.isConfirmed) {
        mutate({ subtaskId, status: result.value });
      }
    });
  };

  return { handleStatus };
};

export default useHandleStatus;
