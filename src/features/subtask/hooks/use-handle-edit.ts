import Swal from "sweetalert2";

import { editSubtaskSchema } from "../utils/utils";
import { fromZodError } from "zod-validation-error";
import { useEditSubtask } from "../api/use-edit-subtask";

const useHandleEdit = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { mutate } = useEditSubtask();

  const handleEdit = (subtaskId: string) => {
    Swal.fire({
      title: "edit-subtask",
      width: 600,
      html: ` 
            <div style="display: flex; flex-direction: column;">
                <input id="swal-input1" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" value="${title}">
                <input id="swal-input2" style="border: 1px solid #ccc; padding: 10px; border-radius: 10px;" value="${description}">
            </div>
            `,
      focusConfirm: false,
      preConfirm: () => {
        try {
          const title = (
            document.getElementById("swal-input1") as HTMLInputElement
          ).value;
          const description = (
            document.getElementById("swal-input2") as HTMLInputElement
          ).value;
          editSubtaskSchema.parse({ title, description });
          return { title, description };
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
        mutate({ subtaskId, ...result.value });
      }
    });
  };

  return {
    handleEdit,
  };
};

export default useHandleEdit;
