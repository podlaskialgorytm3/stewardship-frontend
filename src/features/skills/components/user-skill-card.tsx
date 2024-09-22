import { useHandleUserSkillCard } from "../hooks/use-handle-user-skill-card";

const UserSkillCard: React.FC<{
  skill: { id: string; skillName: string };
  type: string;
  groupUserId: number;
}> = ({ skill, type, groupUserId }) => {
  const { handleAddSkill, handleDeleteSkill } = useHandleUserSkillCard();

  return (
    <div className="bg-[#7e007e] text-white p-2 m-1 rounded-xl flex">
      <p className="mr-2 cursor-pointer">{skill.skillName}</p>
      {type === "add" && (
        <p
          className="cursor-pointer"
          onClick={() => handleAddSkill({ skillId: skill.id, groupUserId })}
        >
          ➕
        </p>
      )}
      {type === "delete" && (
        <p
          className="cursor-pointer"
          onClick={() => handleDeleteSkill({ skillId: skill.id, groupUserId })}
        >
          🗑️
        </p>
      )}
    </div>
  );
};

export { UserSkillCard };
