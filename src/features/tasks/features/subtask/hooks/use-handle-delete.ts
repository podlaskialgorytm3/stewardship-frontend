import Swal from "sweetalert2";

import { useDeleteSubtask } from "../api/use-delete-subtask";

const useHandleDelete = () => {
  const { mutate } = useDeleteSubtask();

  const handleDelete = (subtaskId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this subtask",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(subtaskId);
      }
    });
  };

  return { handleDelete };
};

export { useHandleDelete };
