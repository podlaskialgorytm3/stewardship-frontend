import { useHandleDeleteSkill } from "../hooks/use-handle-delete-skill";

const SkillCard: React.FC<{
  skill: { id: string; skillName: string; isRemote: boolean; groupId: string };
}> = ({ skill }) => {
  const { handleDeleteSkill } = useHandleDeleteSkill();
  return (
    <div className="w-[300px] border-[2px] border-primary border-solid rounded-lg flex justify-between items-center p-2 mt-3">
      <div>
        <h1 className="font-bold">{skill.skillName}</h1>
        <p>{skill.isRemote && "remote"}</p>
      </div>
      <p
        onClick={() => handleDeleteSkill(skill.id, skill.groupId)}
        className="cursor-pointer"
      >
        🗑️
      </p>
    </div>
  );
};

export { SkillCard };
