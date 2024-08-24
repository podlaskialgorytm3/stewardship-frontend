import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { MembersAddedToTask } from "./members-added-to-task";
import { MembersOffTask } from "./members-off-task";
import { useCheckRoleByTasInfokId } from "../../../../../api/hooks/use-check-role-by-task-info-id";

export const TaskMembers: React.FC<{ taskInfoId: string | undefined }> = ({
  taskInfoId,
}) => {
  const { data: isAdmin, isLoading } = useCheckRoleByTasInfokId(
    taskInfoId as string
  );

  return (
    <div className="w-[400px] border-[2px] h-[400px] overflow-y-scroll border-[#7e007e] rounded-xl flex flex-col items-center">
      <Splide
        aria-label="My Favorite Images"
        className="cursor-grab w-[100%] h-[400px]"
        options={{
          pagination: false,
        }}
      >
        {!isLoading && (
          <SplideSlide>
            <MembersAddedToTask taskInfoId={taskInfoId} isAdmin={isAdmin} />
          </SplideSlide>
        )}
        {!isLoading && isAdmin && (
          <>
            <SplideSlide>
              <MembersOffTask taskInfoId={taskInfoId} isAdmin={isAdmin} />
            </SplideSlide>
          </>
        )}
      </Splide>
    </div>
  );
};
