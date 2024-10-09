import { useParams } from "react-router-dom";

import { ShiftPreference } from "./shift-preference";
import { EmploymentTypePreference } from "./employment-type-preference";

const Preferences: React.FC = () => {
  const { id: groupId } = useParams<{ id: string }>();
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="mt-10 text-3xl font-bold">preferences-management</h1>
      <p>You can select your preferences to work like:</p>
      <div className="flex flex-wrap w-[92%] mt-5">
        <ShiftPreference groupId={groupId} />
        <EmploymentTypePreference groupId={groupId} />
      </div>
    </div>
  );
};

export { Preferences };
