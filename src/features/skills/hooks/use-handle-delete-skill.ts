import Swal from "sweetalert2";

import { useDeleteSkill } from "../api/use-delete-skill";

const useHandleDeleteSkill = () => {
  const { mutate } = useDeleteSkill();

  const handleDeleteSkill = (skillId: string, groupId: string) => {
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
        mutate({
          skillId,
          groupId,
        });
      }
    });
  };
  return { handleDeleteSkill };
};

export { useHandleDeleteSkill };
