import { useFetchDayRestriction } from "../api/use-fetch-day-restriction";

import { Loading } from "../../../shared/components/loading";

import { DayRestrictionInterface } from "../types/types";

import { useDeleteDayRestirction } from "../api/use-delete-day-restriction";

import Swal from "sweetalert2";

const DayRestrictionView: React.FC<{
  scheduleRuleId: string;
  groupId: string | undefined;
}> = ({ scheduleRuleId, groupId }) => {
  const { data, isLoading } = useFetchDayRestriction({ scheduleRuleId });

  const { mutate } = useDeleteDayRestirction();

  const handleDelete = (dayRestrictionId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate({
          dayRestrictionId,
          groupId,
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">day-restriction</h1>
      <div>
        {isLoading && <Loading size={50} />}
        {data?.map(
          (dayRestriction: DayRestrictionInterface & { id: string }) => (
            <div className="flex justify-between border-primary border-[2px] border-solid mb-4 rounded-lg p-3">
              <p>
                <b>{dayRestriction.dayOfWeek}</b> for max{" "}
                <b>{dayRestriction.maxFollowingDay}</b> time in a row
              </p>
              <p
                className="ml-3 cursor-pointer"
                onClick={() => handleDelete(dayRestriction.id as string)}
              >
                {"🗑️"}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { DayRestrictionView };
