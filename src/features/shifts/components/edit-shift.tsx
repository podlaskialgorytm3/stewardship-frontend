import { useState } from "react";

import {
  ShiftInterface,
  CreateShiftInterface,
  CreateShiftPropsInterface,
} from "../types/types";
import { CREATE_SHIFT } from "../constants/constants";

import { Box, Button } from "@mui/material";

import { FormTextInput } from "./form-text-input";

import { useHandleEditShift } from "../hooks/use-handle-edit-shfit";

const EditShift: React.FC<{
  groupId: string | undefined;
  shift: ShiftInterface;
}> = ({ groupId, shift }) => {
  const [shiftData, setShift] = useState<CreateShiftInterface>({
    nameOfShift: shift.nameOfShift,
    startFrom: shift.startFrom,
    startTo: shift.startTo,
    endFrom: shift.endFrom,
    endTo: shift.endTo,
    minDailyHours: shift.minDailyHours,
    maxDailyHours: shift.maxDailyHours,
  });

  const { onSubmit, register, errors, handleSubmit } = useHandleEditShift({
    setShift,
    groupId: groupId,
    shiftId: shift.id,
  });
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">edit-shift</h1>
      <Box
        component="form"
        color={"secondary"}
        onSubmit={handleSubmit(onSubmit as () => void)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
          margin: "auto",
        }}
      >
        {CREATE_SHIFT.map((shiftProp: CreateShiftPropsInterface) => (
          <FormTextInput
            key={shiftProp.name}
            shift={shiftProp}
            register={register}
            errors={errors}
            value={
              shiftData[shiftProp.name as keyof CreateShiftInterface] as string
            }
          />
        ))}
        <Button type="submit" variant="contained" color="secondary">
          edit
        </Button>
      </Box>
    </div>
  );
};

export { EditShift };
