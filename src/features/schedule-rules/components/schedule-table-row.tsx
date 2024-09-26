import { useState } from "react";

import { useDeleteScheduleRule } from "../api/use-delete-schedule-rule";

import { TableCell, TableRow as UITableRow } from "../../../ui/table";
import { ScheduleRuleInterface } from "../types/types";

import { motion } from "framer-motion";

import { EditScheduleRule } from "./edit-schedule-rule";
import { CreateDayRestriction } from "./create-day-restriction";
import { DayRestrictionView } from "./day-restriction-view";

import Swal from "sweetalert2";

const ScheduleTableRow = ({
  scheduleRule,
  groupId,
}: {
  scheduleRule: ScheduleRuleInterface;
  groupId: string | undefined;
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const { mutate } = useDeleteScheduleRule();

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const newX = e.clientX - startPos.x;

    if (newX >= -200 && newX <= 0) {
      setPosition({
        x: newX,
        y: position.y,
      });
    }
    if (newX < -200) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert schedule rule!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          mutate({ scheduleRuleId: scheduleRule.id, groupId });
        }
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    setPosition({
      x: 0,
      y: position.y,
    });
  };

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <UITableRow
        key={scheduleRule.id}
        className="cursor-grab hover:font-bold"
        onClick={() => handleClick()}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: isDragging ? "grabbing" : "grab",
          transition: isDragging ? "none" : "transform 0.3s ease",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <TableCell>{scheduleRule.scheduleRuleName}</TableCell>
        <TableCell>{scheduleRule.maxDailyHours} h</TableCell>
        <TableCell>{scheduleRule.maxWeeklyHours} h</TableCell>
        <TableCell>{scheduleRule.minRestBeetwenShifts} h</TableCell>
        <TableCell>{scheduleRule.minWeeklyRest} h</TableCell>
        {isDragging && (
          <TableCell className="bg-red-600 text-white absolute">
            {"   DELETE   "}
          </TableCell>
        )}
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
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <EditScheduleRule groupId={groupId} scheduleRule={scheduleRule} />
          <CreateDayRestriction />
          <DayRestrictionView />
        </motion.div>
      </TableCell>
    </>
  );
};

export { ScheduleTableRow };
