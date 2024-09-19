import { Button } from "@mui/material";
import { BoxElement } from "../../../shared/components/box-element";

const Skill: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-10 text-3xl font-bold">skill-management</h1>
      <div className="flex w-[90%]">
        <div className="w-[50%] mt-10">creating skill management</div>
        <div className="w-[50%] mt-10">member skill management</div>
      </div>
    </div>
  );
};

export { Skill };
