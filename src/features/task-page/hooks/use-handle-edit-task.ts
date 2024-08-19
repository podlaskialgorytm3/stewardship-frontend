import Swal from "sweetalert2";
//import { fromZodError } from "zod-validation-error";

//import { EditTaskSchema } from "../types/types";

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
      preConfirm: () => {},
    }).then((result) => {
      if (result.isConfirmed) {
        // mutate data
      }
    });
  };

  return { handleEditTask };
};

export { useHandleEditTask };
