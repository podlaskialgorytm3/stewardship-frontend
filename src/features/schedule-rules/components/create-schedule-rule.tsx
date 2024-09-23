import { useState } from "react";
import { useParams } from "react-router-dom";

import { CreateScheduleRuleInterface } from "../types/types";
import { useHandleCreateScheduleRule } from "../hooks/use-handle-create-schedule-rule";

import { Box, Button } from "@mui/material";
import { FormTextInput } from "./form-text-input";
import { CREATE_SCHEDULE_RULE } from "../constants/constants";
import { CreateSchedulePropsInterface } from "../types/types";

const CreateScheduleRule: React.FC<{ handleChangePage: () => void }> = ({
  handleChangePage,
}) => {
  const { id: groupId } = useParams<{ id: string | undefined }>();

  const [scheduleRule, setScheduleRule] = useState<CreateScheduleRuleInterface>(
    {
      scheduleRuleName: "",
      maxDailyHours: 0,
      maxWeeklyHours: 0,
      minRestBeetwenShifts: 0,
      minWeeklyRest: 0,
    }
  );

  const { onSubmit, register, errors, handleSubmit } =
    useHandleCreateScheduleRule({
      setScheduleRule,
      groupId: groupId,
      handleChangePage: handleChangePage,
    });
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">create-schedule-rule</h1>
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
        {CREATE_SCHEDULE_RULE.map((rule: CreateSchedulePropsInterface) => (
          <FormTextInput
            key={rule.name}
            rule={rule}
            register={register}
            errors={errors}
            value={
              scheduleRule[
                rule.name as keyof CreateScheduleRuleInterface
              ] as string
            }
          />
        ))}
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export { CreateScheduleRule };
