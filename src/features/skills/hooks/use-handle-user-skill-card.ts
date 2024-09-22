import Swal from "sweetalert2";

import { useAddSkill } from "../api/use-add-skill-to-user";

const useHandleUserSkillCard = () => {
  const { mutate: addSkill } = useAddSkill();

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

  return { handleAddSkill };
};

export { useHandleUserSkillCard };
