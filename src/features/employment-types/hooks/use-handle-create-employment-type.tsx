import { useForm } from "react-hook-form";
import { fromZodError } from "zod-validation-error";
import {
  CreateEmploymentTypeInterface,
  EmploymentTypeSchema,
} from "../types/types";

import { useCreateEmploymentType } from "../api/use-create-employment-type";

const useHandleCreateEmploymentType = ({
  setEmploymentType,
  groupId,
  handleChangePage,
}: {
  setEmploymentType: React.Dispatch<
    React.SetStateAction<CreateEmploymentTypeInterface>
  >;
  groupId: string | undefined;
  handleChangePage: (menu: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { mutate } = useCreateEmploymentType();

  const onSubmit = (data: CreateEmploymentTypeInterface) => {
    try {
      const dataValidate = EmploymentTypeSchema.parse({
        employmentName: data.employmentName,
        workingHours: Number(data.workingHours),
      });
      setEmploymentType(dataValidate);
      mutate({ employmentType: dataValidate, groupId });
      handleChangePage("employment-types");
    } catch (error: any) {
      const validationError = fromZodError(error);
      validationError.details.forEach((detail: any) => {
        setError(detail.path[0], { type: "manual", message: detail.message });
      });
    }
  };

  return { onSubmit, register, errors, handleSubmit };
};

export { useHandleCreateEmploymentType };
