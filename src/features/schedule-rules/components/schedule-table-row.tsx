import { TableCell, TableRow as UITableRow } from "../../../ui/table";
import { ScheduleRuleInterface } from "../types/types";

const ScheduleTableRow = ({
  scheduleRule,
}: {
  scheduleRule: ScheduleRuleInterface;
}) => {
  return (
    <UITableRow key={scheduleRule.id} className="hover:font-bold">
      <TableCell>{scheduleRule.scheduleRuleName}</TableCell>
      <TableCell>{scheduleRule.maxDailyHours} h</TableCell>
      <TableCell>{scheduleRule.maxWeeklyHours} h</TableCell>
      <TableCell>{scheduleRule.minRestBeetwenShifts} h</TableCell>
      <TableCell>{scheduleRule.minWeeklyRest} h</TableCell>
    </UITableRow>
  );
};

export { ScheduleTableRow };
