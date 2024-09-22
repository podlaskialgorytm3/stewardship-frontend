interface ScheduleRuleInterface {
  id: string;
  scheduleRuleName: string;
  maxDailyHours: number;
  maxWeeklyHours: number;
  minRestBeetwenShifts: number;
  minWeeklyRest: number;
}

export type { ScheduleRuleInterface };
