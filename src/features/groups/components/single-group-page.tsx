import { useParams } from "react-router-dom";

import { AuthError } from "../../../shared/components/auth-error";
import { useBelongGroup } from "../api/use-belong-group";
import { useCheckRole } from "../../../api/hooks/use-check-role-by-group-id";

import { Members } from "../features/group-members/components/members";
import { GroupManagement } from "../features/group-management/components/group-management";
import { TaskArea } from "../features/task-card/components/task-area";
import { GroupElement } from "./group-element";
import { ScheduleManagement } from "./schedule-management";

export const SingleGroupPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: isBelongGroup, isLoading: isLoadingBelongGroup } =
    useBelongGroup(id as string);
  const { data: isAdmin, isLoading: loadingRole } = useCheckRole(id as string);

  return (
    <div>
      {isBelongGroup && !isLoadingBelongGroup ? (
        <div className="flex justify-center items-start mt-10 w-[1300px]">
          <div className="w-[50%] min-h-[200px] flex flex-col items-center justify-start">
            <GroupManagement groupId={id} />
            <TaskArea groupId={id} />
          </div>
          <div className="w-[30%] flex flex-col justify-center items-center">
            <Members groupId={id} />
            {isAdmin && !loadingRole && (
              <GroupElement size={400}>
                <ScheduleManagement groupId={id} />
              </GroupElement>
            )}
          </div>
        </div>
      ) : (
        <AuthError>You are not belong to group!</AuthError>
      )}
    </div>
  );
};
