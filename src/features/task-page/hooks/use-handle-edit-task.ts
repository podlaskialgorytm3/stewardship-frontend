import Swal from "sweetalert2";
import { fromZodError } from "zod-validation-error";
import { EditTaskSchema, TaskInfoResponse } from "../types/types";

import { useEditTask } from "../api/use-edit-task";
import { modifyDate } from "../../../shared/utils/utils";

const useHandleEditTask = ({ task }: { task: TaskInfoResponse }) => {
  const { mutate } = useEditTask();
  const handleEditTask = () => {
    Swal.fire({
      title: "Edit Task",
      html: `<div style="display: flex; flex-direction: column;">
                                <input id="name" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="name" value="${
                                  task.name || ""
                                }">
                                <select id="status" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;">
                                        <option value="waiting" ${
                                          task.status === "waiting"
                                            ? "selected"
                                            : ""
                                        }>waiting</option>
                                        <option value="in progress" ${
                                          task.status === "in progress"
                                            ? "selected"
                                            : ""
                                        }>in progress</option>
                                        <option value="done" ${
                                          task.status === "done"
                                            ? "selected"
                                            : ""
                                        }>done</option>
                                </select>
                                <select id="priority" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;">
                                        <option value="low priority" ${
                                          task.priority === "low priority"
                                            ? "selected"
                                            : ""
                                        }>low priority</option>
                                        <option value="medium priority" ${
                                          task.priority === "medium priority"
                                            ? "selected"
                                            : ""
                                        }>medium priority</option>
                                        <option value="high priority" ${
                                          task.priority === "high priority"
                                            ? "selected"
                                            : ""
                                        }>high priority</option>
                                </select>
                                <input id="startDate" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="start date" type="datetime-local" value="${
                                  modifyDate(task.startDate) || ""
                                }">
                                <input id="endDate" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="end date" type="datetime-local" value="${
                                  modifyDate(task.endDate) || ""
                                }">
                                <input id="comments" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" placeholder="comments" value="${
                                  task.comments || ""
                                }">
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
        mutate({ task: { ...result.value }, taskInfoId: task.id });
      }
    });
  };

  return { handleEditTask };
};

export { useHandleEditTask };
