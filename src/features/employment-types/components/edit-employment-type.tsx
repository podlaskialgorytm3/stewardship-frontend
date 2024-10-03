import { useState } from "react";

import {
  EmploymentTypeInterface,
  EmploymentTypePropsInterface,
  CreateEmploymentTypeInterface,
} from "../types/types";
import { CREATE_EMPLOYMENT_TYPES } from "../constants/constants";

import { Box, Button } from "@mui/material";

import { FormTextInput } from "./form-text-input";

import { useHandleEditEmploymentType } from "../hooks/use-handle-edit-employment-type";

const EditEmploymentType: React.FC<{
  groupId: string | undefined;
  employmentType: EmploymentTypeInterface;
}> = ({ groupId, employmentType }) => {
  const [employmentTypeData, setEmploymentTypeData] =
    useState<CreateEmploymentTypeInterface>({
      employmentName: employmentType.employmentName,
      workingHours: employmentType.workingHours,
    });

  const { onSubmit, register, errors, handleSubmit } =
    useHandleEditEmploymentType({
      setEmploymentType: setEmploymentTypeData,
      groupId,
      employmentTypeId: employmentType.id,
    });

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">edit-schedule-rule</h1>
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
        {CREATE_EMPLOYMENT_TYPES.map(
          (employmentType: EmploymentTypePropsInterface) => (
            <FormTextInput
              key={employmentType.name}
              employmentType={employmentType}
              register={register}
              errors={errors}
              value={
                employmentTypeData[
                  employmentType.name as keyof CreateEmploymentTypeInterface
                ] as string
              }
            />
          )
        )}
        <Button type="submit" variant="contained" color="secondary">
          edit
        </Button>
      </Box>
    </div>
  );
};

export { EditEmploymentType };
