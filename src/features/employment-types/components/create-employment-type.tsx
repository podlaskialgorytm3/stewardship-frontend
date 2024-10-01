import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";

import { CreateEmploymentTypeInterface } from "../types/types";
import { CREATE_EMPLOYMENT_TYPES } from "../constants/constants";
import { EmploymentTypePropsInterface } from "../types/types";

import { FormTextInput } from "./form-text-input";

import { useHandleCreateEmploymentType } from "../hooks/use-handle-create-employment-type";

const CreateEmploymentType: React.FC<{
  handleChangePage: (menu: string) => void;
}> = ({ handleChangePage }) => {
  const { id: groupId } = useParams<{ id: string | undefined }>();
  const [employmentTypeData, setEmploymentType] =
    useState<CreateEmploymentTypeInterface>({
      employmentName: "",
      workingHours: 0,
    });

  const { onSubmit, register, errors, handleSubmit } =
    useHandleCreateEmploymentType({
      setEmploymentType,
      groupId: groupId,
      handleChangePage: handleChangePage,
    });

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">create-employment-type</h1>
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
          Submit
        </Button>
      </Box>
    </div>
  );
};

export { CreateEmploymentType };
