import { useForm } from "react-hook-form";
import { fromZodError } from "zod-validation-error";
import { ScheduleRuleIdSchema } from "../types/types";

import { useSetScheduleRule } from "../api/use-set-schedule-rule";

const useHandleSetScheduleRule = ({
  setScheduleRuleId,
  groupUserId,
}: {
  setScheduleRuleId: React.Dispatch<
    React.SetStateAction<{ scheduleRuleId: string }>
  >;
  groupUserId: string;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { mutate } = useSetScheduleRule();

  const onSubmit = (data: { scheduleRuleId: string }) => {
    try {
      const dataValidate = ScheduleRuleIdSchema.parse({
        scheduleRuleId: data.scheduleRuleId,
      });
      setScheduleRuleId(dataValidate);
      mutate({ groupUserId, scheduleRuleId: dataValidate.scheduleRuleId });
    } catch (error: any) {
      const validationError = fromZodError(error);
      validationError.details.forEach((detail: any) => {
        setError(detail.path[0], { type: "manual", message: detail.message });
      });
    }
  };

  return { onSubmit, register, errors, handleSubmit };
};

export { useHandleSetScheduleRule };
