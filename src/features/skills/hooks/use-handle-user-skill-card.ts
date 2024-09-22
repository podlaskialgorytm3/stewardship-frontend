import Swal from "sweetalert2";

import { useAddSkill } from "../api/use-add-skill-to-user";
import { useDeleteSkill } from "../api/use-delete-skill-from-user";

const useHandleUserSkillCard = () => {
  const { mutate: addSkill } = useAddSkill();
  const { mutate: deleteSkill } = useDeleteSkill();

  const handleAddSkill = ({
    skillId,
    groupUserId,
  }: {
    skillId: string;
    groupUserId: number;
  }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to add this skill",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        addSkill({ skillId, groupUserId });
      }
    });
  };

  const handleDeleteSkill = ({
    skillId,
    groupUserId,
  }: {
    skillId: string;
    groupUserId: number;
  }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this skill",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSkill({ skillId, groupUserId });
      }
    });
  };

  return { handleAddSkill, handleDeleteSkill };
};

export { useHandleUserSkillCard };
