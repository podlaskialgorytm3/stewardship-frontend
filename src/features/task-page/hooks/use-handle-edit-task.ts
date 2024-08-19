import Swal from "sweetalert2";
import { fromZodError } from "zod-validation-error";

import { EditTaskSchema } from "../types/types";

const useHandleEditTask = () => {
  const handleEditTask = () => {
    Swal.fire({
      title: "Edit Task",
      html: `<div style="display: flex; flex-direction: column;">
                <input id="name" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="name">
                <select id="status" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" >
                    <option value="waiting">waiting</option>
                    <option value="in progress">in progress</option>
                    <option value="done">done</option>
                </select>
                <select id="priority" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" >
                    <option value="low priority">low priority</option>
                    <option value="medium priority">medium priority</option>
                    <option value="high priority">high priority</option>
                </select>
                <input id="startDate" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="start date" type="datetime-local">
                <input id="endDate" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="end date" type="datetime-local">
                <input id="comments" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="comments">
                </div>`,
      showCancelButton: true,
      confirmButtonText: "Edit",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const name = (document.getElementById("name") as HTMLInputElement)
          .value;
        const status = (document.getElementById("status") as HTMLSelectElement)
          .value;
        const priority = (
          document.getElementById("priority") as HTMLSelectElement
        ).value;
        const startDate = (
          document.getElementById("startDate") as HTMLInputElement
        ).value;
        const endDate = (document.getElementById("endDate") as HTMLInputElement)
          .value;
        const comments = (
          document.getElementById("comments") as HTMLInputElement
        ).value;
        try {
          EditTaskSchema.parse({
            name,
            status,
            priority,
            startDate,
            endDate,
            comments,
          });
          return { name, status, priority, startDate, endDate, comments };
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
        // mutate data
      }
    });
  };

  return { handleEditTask };
};

export { useHandleEditTask };
