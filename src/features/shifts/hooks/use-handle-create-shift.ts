import { useForm } from "react-hook-form";
import { fromZodError } from "zod-validation-error";
import { CreateShiftInterface, CreateShiftSchema } from "../types/types";

import { useCreateShift } from "../api/use-create-shift";

const useHandleCreateShift = ({
  setShift,
  groupId,
  handleChangePage,
}: {
  setShift: React.Dispatch<React.SetStateAction<CreateShiftInterface>>;
  groupId: string | undefined;
  handleChangePage: (menu: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { mutate } = useCreateShift();

  const onSubmit = (data: CreateShiftInterface) => {
    try {
      const dataValidate = CreateShiftSchema.parse({
        nameOfShift: data.nameOfShift,
        startFrom: data.startFrom,
        startTo: data.startTo,
        endFrom: data.endFrom,
        endTo: data.endTo,
        minDailyHours: Number(data.minDailyHours),
        maxDailyHours: Number(data.maxDailyHours),
      });
      setShift(dataValidate);
      mutate({ shift: dataValidate, groupId });
      handleChangePage("shifts");
    } catch (error: any) {
      const validationError = fromZodError(error);
      validationError.details.forEach((detail: any) => {
        setError(detail.path[0], { type: "manual", message: detail.message });
      });
    }
  };

  return { onSubmit, register, errors, handleSubmit };
};

export { useHandleCreateShift };
