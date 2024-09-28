import { useFetchDayRestriction } from "../api/use-fetch-day-restriction";

import { Loading } from "../../../shared/components/loading";

import { DayRestrictionInterface } from "../types/types";

const DayRestrictionView: React.FC<{ scheduleRuleId: string }> = ({
  scheduleRuleId,
}) => {
  const { data, isLoading } = useFetchDayRestriction({ scheduleRuleId });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">day-restriction</h1>
      <div>
        {isLoading && <Loading size={50} />}
        {data?.map(
          (dayRestriction: DayRestrictionInterface & { id: string }) => (
            <div className="flex justify-between border-primary border-[2px] border-solid mb-4 rounded-lg p-3">
              <p>
                <b>{dayRestriction.dayOfWeek}</b> for max{" "}
                <b>{dayRestriction.maxFollowingDay}</b> time in a row
              </p>
              <p className="ml-3 cursor-pointer">{"🗑️"}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { DayRestrictionView };
