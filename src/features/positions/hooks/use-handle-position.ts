import Swal from "sweetalert2";

const useHandlePosition = () => {
  const handlePosition = (position: string) => {
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
        Swal.fire("position-submitted", "", "success");
      }
    });
  };

  return { handlePosition };
};

export { useHandlePosition };
