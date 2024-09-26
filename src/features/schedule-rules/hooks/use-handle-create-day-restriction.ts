import { useForm } from "react-hook-form";
import { fromZodError } from "zod-validation-error";
import { DayRestrictionInterface, DayRestrictionSchema } from "../types/types";

import { useCreateDayRestriction } from "../api/use-create-day-restriction";

const useHandleCreateDayRestriction = ({
  setDayRestriction,
  groupId,
  scheduleRuleId,
}: {
  setDayRestriction: React.Dispatch<
    React.SetStateAction<DayRestrictionInterface>
  >;
  groupId: string | undefined;
  scheduleRuleId: string;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { mutate } = useCreateDayRestriction();

  const onSubmit = (data: DayRestrictionInterface) => {
    try {
      const dataValidate = DayRestrictionSchema.parse({
        maxFollowingDay: Number(data.maxFollowingDay),
        dayOfWeek: data.dayOfWeek,
      });
      setDayRestriction(dataValidate);
      mutate({ groupId, scheduleRuleId, dayRestriction: dataValidate });
    } catch (error: any) {
      const validationError = fromZodError(error);
      validationError.details.forEach((detail: any) => {
        setError(detail.path[0], { type: "manual", message: detail.message });
      });
    }
  };

  return { onSubmit, register, errors, handleSubmit };
};

export { useHandleCreateDayRestriction };
