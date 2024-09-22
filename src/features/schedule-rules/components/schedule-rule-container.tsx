import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";

import { useParams } from "react-router-dom";

import { Loading } from "../../../../src/shared/components/loading";

import { useFetchScheduleRules } from "../api/use-fetch-schedule-rules";

const ScheduleRuleContainer: React.FC = () => {
  const { id: groupId } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchScheduleRules({ groupId } as {
    groupId: string;
  });

  return (
    <div className="w-[90%] mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">name</TableHead>
            <TableHead>max daily hours</TableHead>
            <TableHead>max weekly hours</TableHead>
            <TableHead>min rest beetwen shifts</TableHead>
            <TableHead>min weekly rest</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <Loading size={50} />}
          {data?.map(
            (scheduleRule: {
              id: string;
              scheduleRuleName: string;
              maxDailyHours: number;
              maxWeeklyHours: number;
              minRestBeetwenShifts: number;
              minWeeklyRest: number;
            }) => (
              <TableRow key={scheduleRule.id}>
                <TableCell>{scheduleRule.scheduleRuleName}</TableCell>
                <TableCell>{scheduleRule.maxDailyHours} h</TableCell>
                <TableCell>{scheduleRule.maxWeeklyHours} h</TableCell>
                <TableCell>{scheduleRule.minRestBeetwenShifts} h</TableCell>
                <TableCell>{scheduleRule.minWeeklyRest} h</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export { ScheduleRuleContainer };
