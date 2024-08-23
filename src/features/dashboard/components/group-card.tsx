import { useNavigate } from "react-router-dom";

import { GroupDashboardResponse } from "../types/types";

export const GroupCard: React.FC<{ group: GroupDashboardResponse }> = ({
  group,
}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-5 w-[90%] h-[120px] border-primary border-[2px] border-solid rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mt-2">{group.name}</h1>
      <p className="text-md">{group.category}</p>
      <button
        className="bg-primary text-white p-2 rounded-md mt-2 mb-2"
        onClick={() => navigate(`/dashboard/groups/${group.id}`)}
      >
        view-group
      </button>
    </div>
  );
};
