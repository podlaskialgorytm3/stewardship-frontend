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
            <p key={dayRestriction.id}>
              {dayRestriction.dayOfWeek} for max{" "}
              {dayRestriction.maxFollowingDay + " "} time in a row
            </p>
          )
        )}
      </div>
    </div>
  );
};

export { DayRestrictionView };
