import { useParams } from "react-router-dom";

import { AuthError } from "../../../shared/components/auth-error";
import useBelongGroup from "../api/use-belong-group";

import { Members } from "../../members/components/members";
import { GroupManagement } from "../../group-management/components/group-management";
import { TaskArea } from "../../task-card/components/task-area";

export const SingleGroupPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: isBelongGroup, isLoading: isLoadingBelongGroup } =
    useBelongGroup(id as string);

  return (
    <div>
      {isBelongGroup && !isLoadingBelongGroup ? (
        <div className="flex justify-center items-start mt-10 w-[1300px]">
          <div className="w-[50%] min-h-[200px] flex flex-col items-center justify-start">
            <GroupManagement groupId={id} />
            <TaskArea groupId={id} />
          </div>
          <Members groupId={id} />
        </div>
      ) : (
        <AuthError>You are not belong to group!</AuthError>
      )}
    </div>
  );
};
