import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHandleCreateShift } from "../hooks/use-handle-create-shift";

import { Box, Button } from "@mui/material";
import { FormTextInput } from "./form-text-input";
import { CREATE_SHIFT } from "../constants/constants";
import {
  CreateShiftPropsInterface,
  CreateShiftInterface,
} from "../types/types";

const CreateShift: React.FC<{ handleChangePage: () => void }> = ({
  handleChangePage,
}) => {
  const { id: groupId } = useParams<{ id: string | undefined }>();

  const [shifts, setShift] = useState<CreateShiftInterface>({
    nameOfShift: "",
    startFrom: "",
    startTo: "",
    endFrom: "",
    endTo: "",
    minDailyHours: 0,
    maxDailyHours: 0,
  });

  const { onSubmit, register, errors, handleSubmit } = useHandleCreateShift({
    setShift,
    groupId: groupId,
    handleChangePage: handleChangePage,
  });
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">create-shfit</h1>
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
        {CREATE_SHIFT.map((shift: CreateShiftPropsInterface) => (
          <FormTextInput
            key={shift.name}
            shift={shift}
            register={register}
            errors={errors}
            value={shifts[shift.name as keyof CreateShiftInterface] as string}
          />
        ))}
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export { CreateShift };
