import { useParams } from "react-router-dom";

import { Members } from "./members";

const Positions: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();

  return (
    <div className="flex w-[100%] justify-center items-center flex-col">
      <h1 className="mt-10 text-3xl font-bold">position-management</h1>
      <Members groupId={id} />
    </div>
  );
};

export { Positions };
