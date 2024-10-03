import { useState } from "react";

import { TableCell, TableRow as UITableRow } from "../../../ui/table";

import { EmploymentTypeInterface } from "../types/types";

import { motion } from "framer-motion";

import { useDeleteEmploymentType } from "../api/use-delete-employment-type";

import Swal from "sweetalert2";

const EmploymentTypeRow = ({
  groupId,
  employmentType,
}: {
  groupId: string | undefined;
  employmentType: EmploymentTypeInterface;
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const { mutate } = useDeleteEmploymentType();

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
        text: "You won't be able to revert employment type!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          mutate({ employmentTypeId: employmentType.id, groupId });
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
        key={employmentType.id}
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
        <TableCell>{employmentType.employmentName}</TableCell>
        <TableCell>{employmentType.workingHours} h</TableCell>
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
          Something will there be soon
        </motion.div>
      </TableCell>
    </>
  );
};

export { EmploymentTypeRow };
