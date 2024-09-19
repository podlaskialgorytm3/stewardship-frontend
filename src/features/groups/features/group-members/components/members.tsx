import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import MembersOfGroup from "./type-of-slide/members-of-group";
import RequestsToGroup from "./type-of-slide/requests-to-group";
import AddingToGroup from "./type-of-slide/adding-to-group";
import { useCheckRole } from "../../../../../api/hooks/use-check-role-by-group-id";

export const Members: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  const { data: isAdmin, isLoading } = useCheckRole(groupId as string);

  return (
    <div className="w-[100%] border-[2px] h-[400px] overflow-y-scroll border-[#7e007e] rounded-xl flex flex-col items-center">
      <Splide
        aria-label="My Favorite Images"
        className="cursor-grab w-[100%] h-[400px]"
        options={{
          pagination: false,
        }}
      >
        <SplideSlide>
          <MembersOfGroup groupId={groupId} />
        </SplideSlide>
        {!isLoading && isAdmin && (
          <>
            <SplideSlide>
              <RequestsToGroup groupId={groupId} />
            </SplideSlide>
            <SplideSlide>
              <AddingToGroup groupId={groupId} />
            </SplideSlide>
          </>
        )}
      </Splide>
    </div>
  );
};
