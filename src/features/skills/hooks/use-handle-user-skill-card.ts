import Swal from "sweetalert2";

const useHandleUserSkillCard = () => {
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
        // Add skill
      }
    });
  };

  return { handleAddSkill };
};

export { useHandleUserSkillCard };
