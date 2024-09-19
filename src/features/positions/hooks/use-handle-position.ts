import Swal from "sweetalert2";

import { useUpdatePosition } from "../api/use-update-position";

const useHandlePosition = () => {
  const { mutate } = useUpdatePosition();
  const handlePosition = (position: string, memberId: string) => {
    Swal.fire({
      input: "text",
      title: "set-position",
      inputPlaceholder: "enter-position",
      showCancelButton: true,
      confirmButtonText: "submit",
      cancelButtonText: "cancel",
      inputValue: position,
    }).then((result) => {
      if (result.isConfirmed) {
        mutate({ position: result.value, memberId });
      }
    });
  };

  return { handlePosition };
};

export { useHandlePosition };
