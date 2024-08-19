import Swal from "sweetalert2";

import { fromZodError } from "zod-validation-error";
import { CreateSubtaskSchema, CreateSubtaskType } from "../types/types";

const useHandleCreateSubtask = () => {
  const handleCreateSubtask = () => {
    Swal.fire({
      title: "Create a subtask",
      html: `<div style="display: flex; flex-direction: column;">
                <input id="title" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="title">
                <input id="description" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="description">
                <select id="status" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" >
                    <option value="waiting">waiting</option>
                    <option value="in progress">in progress</option>
                    <option value="done">done</option>
                </select>
            </div>`,
      showCancelButton: true,
      confirmButtonText: "Create",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        try {
          const title = (document.getElementById("title") as HTMLInputElement)
            .value;
          const description = (
            document.getElementById("description") as HTMLInputElement
          ).value;
          const status = (
            document.getElementById("status") as HTMLSelectElement
          ).value;
          CreateSubtaskSchema.parse({ title, description, status });
          return { title, description, status };
        } catch (error: any) {
          const validationError = fromZodError(error);
          const errros = [] as string[];
          validationError.details.forEach((detail) => {
            errros.push(detail.message);
          });
          Swal.showValidationMessage(errros.join("<br>"));
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // mutate date
      }
    });
  };

  return { handleCreateSubtask };
};

export { useHandleCreateSubtask };
