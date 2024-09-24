import { useState } from "react";

import { TableCell, TableRow as UITableRow } from "../../../ui/table";
import { ScheduleRuleInterface } from "../types/types";

import { motion } from "framer-motion";

import { EditScheduleRule } from "./edit-schedule-rule";

const ScheduleTableRow = ({
  scheduleRule,
  groupId,
}: {
  scheduleRule: ScheduleRuleInterface;
  groupId: string | undefined;
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <UITableRow
        key={scheduleRule.id}
        className="cursor-pointer hover:font-bold"
        onClick={() => handleClick()}
      >
        <TableCell>{scheduleRule.scheduleRuleName}</TableCell>
        <TableCell>{scheduleRule.maxDailyHours} h</TableCell>
        <TableCell>{scheduleRule.maxWeeklyHours} h</TableCell>
        <TableCell>{scheduleRule.minRestBeetwenShifts} h</TableCell>
        <TableCell>{scheduleRule.minWeeklyRest} h</TableCell>
      </UITableRow>
      <TableCell colSpan={5}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isClick ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "1000px",
          }}
        >
          <EditScheduleRule groupId={groupId} scheduleRule={scheduleRule} />
        </motion.div>
      </TableCell>
    </>
  );
};

export { ScheduleTableRow };
