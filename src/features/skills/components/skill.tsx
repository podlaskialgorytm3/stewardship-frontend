import { useParams } from "react-router-dom";
import { CreateSkill } from "./create-skill";
import { SkillContainer } from "./skill-container";
import { Members } from "./members";
const Skill: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-10 text-3xl font-bold">skill-management</h1>
      <div className="flex w-[90%]">
        <div className="w-[50%] mt-10 flex flex-col items-center">
          <CreateSkill groupId={id} />
          <SkillContainer groupId={id} />
        </div>
        <div className="w-[50%] mt-10">
          <Members groupId={id} />
        </div>
      </div>
    </div>
  );
};

export { Skill };
