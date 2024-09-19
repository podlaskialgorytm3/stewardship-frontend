import { SkillInterface } from "../types/types";

const SkillCard: React.FC<{ skill: SkillInterface & { id: string } }> = ({
  skill,
}) => {
  return (
    <div className="w-[300px] border-[2px] border-primary border-solid rounded-lg flex flex-col items-center p-2 mt-3">
      <h1 className="font-bold">{skill.skill}</h1>
      <p>{skill.isRemote}</p>
      <p>🗑️</p>
    </div>
  );
};

export { SkillCard };
