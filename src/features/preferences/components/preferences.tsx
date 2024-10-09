import { useParams } from "react-router-dom";

import { ShiftPreference } from "./shift-preference";

const Preferences: React.FC = () => {
  const { id: groupId } = useParams<{ id: string }>();
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="mt-10 text-3xl font-bold">preferences-management</h1>
      <p>You can select your preferences to work like:</p>
      <div>
        <ShiftPreference groupId={groupId} />
      </div>
    </div>
  );
};

export { Preferences };
