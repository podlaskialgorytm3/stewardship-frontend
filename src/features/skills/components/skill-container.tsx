import { BoxElement } from "../../../shared/components/box-element";
import { Loading } from "../../../shared/components/loading";
import { SkillCard } from "./skill-card";
import { useFetchSkills } from "../api/use-fetch-skills";

import { SkillInterface } from "../types/types";

const SkillContainer: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  const { data, isLoading } = useFetchSkills({ groupId });

  return (
    <>
      <BoxElement size={350}>
        <h1 className="text-xl font-bold">skills</h1>
        <div className="h-[200px] overflow-scroll">
          {isLoading && <Loading size={50} />}
          {!isLoading &&
            data &&
            data?.map((skill: SkillInterface & { id: string }) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
      </BoxElement>
    </>
  );
};

export { SkillContainer };
