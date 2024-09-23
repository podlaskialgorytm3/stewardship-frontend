import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";

import { useParams } from "react-router-dom";

import { Loading } from "../../../../src/shared/components/loading";
import { ScheduleTableRow } from "./schedule-table-row";

import { useFetchScheduleRules } from "../api/use-fetch-schedule-rules";

import { ScheduleRuleInterface } from "../types/types";

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
          {data?.map((scheduleRule: ScheduleRuleInterface) => (
            <ScheduleTableRow
              key={scheduleRule.id}
              scheduleRule={scheduleRule}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { ScheduleRuleContainer };
