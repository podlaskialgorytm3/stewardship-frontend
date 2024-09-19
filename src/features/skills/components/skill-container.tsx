import { BoxElement } from "../../../shared/components/box-element";

const SkillContainer: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  return (
    <>
      <BoxElement size={350}>
        <h1 className="text-xl font-bold">skills</h1>
      </BoxElement>
    </>
  );
};

export { SkillContainer };
