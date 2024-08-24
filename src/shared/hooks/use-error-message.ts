import Swal from "sweetalert2";
import { useEffect } from "react";

const useErrorMessage = ({
  error,
  isError,
}: {
  error: { message: string };
  isError: boolean;
}) => {
  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.message,
      });
    }
  }, [isError, error]);
};

export { useErrorMessage };
