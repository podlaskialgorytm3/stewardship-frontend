import { useForm } from "react-hook-form";
import { fromZodError } from "zod-validation-error";
import {
  CreateScheduleRuleInterface,
  CreateScheduleRuleSchema,
} from "../types/types";

const useHandleCreateScheduleRule = ({
  setScheduleRule,
  groupId,
}: {
  setScheduleRule: React.Dispatch<
    React.SetStateAction<CreateScheduleRuleInterface>
  >;
  groupId: string | undefined;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: CreateScheduleRuleInterface) => {
    try {
      const dataValidate = CreateScheduleRuleSchema.parse(data);
      setScheduleRule(dataValidate);
      //mutate
    } catch (error: any) {
      const validationError = fromZodError(error);
      validationError.details.forEach((detail: any) => {
        setError(detail.path[0], { type: "manual", message: detail.message });
      });
    }
  };

  return { onSubmit, register, errors, handleSubmit };
};

export { useHandleCreateScheduleRule };
