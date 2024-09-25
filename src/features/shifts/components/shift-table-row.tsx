import { useState } from "react";

import { TableCell, TableRow as UITableRow } from "../../../ui/table";
import { ShiftInterface } from "../types/types";

import { motion } from "framer-motion";

import Swal from "sweetalert2";

import { useDeleteShift } from "../api/use-delete-shfit";

const ShiftTableRow = ({
  shift,
  groupId,
}: {
  shift: ShiftInterface;
  groupId: string | undefined;
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const { mutate } = useDeleteShift();

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
        text: "You won't be able to revert shift!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          mutate({ shiftId: shift.id, groupId: groupId });
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
        key={shift.id}
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
        <TableCell>{shift.nameOfShift}</TableCell>
        <TableCell>{shift.startFrom}</TableCell>
        <TableCell>{shift.startTo}</TableCell>
        <TableCell>{shift.endFrom}</TableCell>
        <TableCell>{shift.endTo}</TableCell>
        <TableCell>{shift.minDailyHours} h</TableCell>
        <TableCell>{shift.maxDailyHours} h</TableCell>
        {isDragging && (
          <TableCell className="bg-red-600 text-white absolute">
            {"   DELETE   "}
          </TableCell>
        )}
      </UITableRow>
      <TableCell colSpan={7}>
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
          EDITING FORM
        </motion.div>
      </TableCell>
    </>
  );
};

export { ShiftTableRow };
