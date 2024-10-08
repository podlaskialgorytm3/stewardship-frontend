import Swal from "sweetalert2";

import { useDeleteTask } from "../api/use-delete-task";

const useHandleDeleteTask = () => {
  const { mutate } = useDeleteTask();

  const handleDeleteTask = (taskInfoId: string | undefined) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(taskInfoId);
      }
    });
  };

  return { handleDeleteTask };
};

export { useHandleDeleteTask };
