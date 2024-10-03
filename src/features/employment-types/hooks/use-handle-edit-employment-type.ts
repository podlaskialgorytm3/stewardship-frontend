import { useForm } from "react-hook-form";
import { fromZodError } from "zod-validation-error";
import {
  CreateEmploymentTypeInterface,
  EmploymentTypeSchema,
} from "../types/types";

import { useEditEmploymentType } from "../api/use-edit-employment-type";

const useHandleEditEmploymentType = ({
  setEmploymentType,
  groupId,
  employmentTypeId,
}: {
  setEmploymentType: React.Dispatch<
    React.SetStateAction<CreateEmploymentTypeInterface>
  >;
  groupId: string | undefined;
  employmentTypeId: string;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { mutate } = useEditEmploymentType();

  const onSubmit = (data: CreateEmploymentTypeInterface) => {
    try {
      const dataValidate = EmploymentTypeSchema.parse({
        employmentName: data.employmentName,
        workingHours: Number(data.workingHours),
      });
      setEmploymentType(dataValidate);
      mutate({ employmentType: dataValidate, groupId, employmentTypeId });
    } catch (error: any) {
      const validationError = fromZodError(error);
      validationError.details.forEach((detail: any) => {
        setError(detail.path[0], { type: "manual", message: detail.message });
      });
    }
  };

  return { onSubmit, register, errors, handleSubmit };
};

export { useHandleEditEmploymentType };
