import { useForm } from "react-hook-form";
import { fromZodError } from "zod-validation-error";
import {
  CreateScheduleRuleInterface,
  CreateScheduleRuleSchema,
} from "../types/types";

import { useCreateScheduleRule } from "../api/use-create-schedule-rule";

const useHandleCreateScheduleRule = ({
  setScheduleRule,
  groupId,
  handleChangePage,
}: {
  setScheduleRule: React.Dispatch<
    React.SetStateAction<CreateScheduleRuleInterface>
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

  const { mutate } = useCreateScheduleRule();

  const onSubmit = (data: CreateScheduleRuleInterface) => {
    try {
      const dataValidate = CreateScheduleRuleSchema.parse({
        maxDailyHours: Number(data.maxDailyHours),
        maxWeeklyHours: Number(data.maxWeeklyHours),
        minRestBeetwenShifts: Number(data.minRestBeetwenShifts),
        minWeeklyRest: Number(data.minWeeklyRest),
        scheduleRuleName: data.scheduleRuleName,
      });
      setScheduleRule(dataValidate);
      mutate({ scheduleRule: dataValidate, groupId });
      handleChangePage("rules");
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
