import { useState } from "react";

import {
  ScheduleRuleInterface,
  CreateSchedulePropsInterface,
  CreateScheduleRuleInterface,
} from "../types/types";
import { CREATE_SCHEDULE_RULE } from "../constants/constants";

import { Box, Button } from "@mui/material";

import { FormTextInput } from "./form-text-input";

import { useHandleEditScheduleRule } from "../hooks/use-handle-edit-schedule-rule";

const EditScheduleRule: React.FC<{
  groupId: string | undefined;
  scheduleRule: ScheduleRuleInterface;
}> = ({ groupId, scheduleRule }) => {
  const [scheduleRuleData, setScheduleRule] =
    useState<CreateScheduleRuleInterface>({
      scheduleRuleName: scheduleRule.scheduleRuleName,
      maxDailyHours: scheduleRule.maxDailyHours,
      maxWeeklyHours: scheduleRule.maxWeeklyHours,
      minRestBeetwenShifts: scheduleRule.minRestBeetwenShifts,
      minWeeklyRest: scheduleRule.minWeeklyRest,
    });

  const { onSubmit, register, errors, handleSubmit } =
    useHandleEditScheduleRule({
      setScheduleRule,
      groupId: groupId,
      scheduleRuleId: scheduleRule.id,
    });
  return (
    <div className="w-full flex justify-center items-center flex-col">
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
        {CREATE_SCHEDULE_RULE.map((rule: CreateSchedulePropsInterface) => (
          <FormTextInput
            key={rule.name}
            rule={rule}
            register={register}
            errors={errors}
            value={
              scheduleRuleData[
                rule.name as keyof CreateScheduleRuleInterface
              ] as string
            }
          />
        ))}
        <Button type="submit" variant="contained" color="secondary">
          edit
        </Button>
      </Box>
    </div>
  );
};

export { EditScheduleRule };
