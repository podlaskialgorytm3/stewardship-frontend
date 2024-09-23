import { object, z } from "zod";

interface ScheduleRuleInterface {
  id: string;
  scheduleRuleName: string;
  maxDailyHours: number;
  maxWeeklyHours: number;
  minRestBeetwenShifts: number;
  minWeeklyRest: number;
}

interface CreateSchedulePropsInterface {
  name: string;
  label: string;
  type: string;
}

interface CreateScheduleRuleInterface {
  scheduleRuleName: string;
  maxDailyHours: number;
  maxWeeklyHours: number;
  minRestBeetwenShifts: number;
  minWeeklyRest: number;
}

const CreateScheduleRuleSchema = object({
  scheduleRuleName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  maxDailyHours: z.number().min(1, { message: "Must be at least 1" }),
  maxWeeklyHours: z.number().min(1, { message: "Must be at least 1" }),
  minRestBeetwenShifts: z.number().min(1, { message: "Must be at least 1" }),
  minWeeklyRest: z.number().min(1, { message: "Must be at least 1" }),
});

export type {
  ScheduleRuleInterface,
  CreateSchedulePropsInterface,
  CreateScheduleRuleInterface,
};

export { CreateScheduleRuleSchema };
