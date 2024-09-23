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

export type { ScheduleRuleInterface, CreateSchedulePropsInterface };
