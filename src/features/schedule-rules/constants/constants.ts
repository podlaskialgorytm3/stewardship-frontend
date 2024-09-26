const CREATE_SCHEDULE_RULE = [
  { name: "scheduleRuleName", type: "text", label: "schedule rule name" },
  { name: "maxDailyHours", type: "number", label: "max daily hours" },
  { name: "maxWeeklyHours", type: "number", label: "max weekly hours" },
  {
    name: "minRestBeetwenShifts",
    type: "number",
    label: "min rest beetwen shifts",
  },
  { name: "minWeeklyRest", type: "number", label: "min weekly rest" },
];

const DAY_OF_WEEK = [
  { value: "Monday" },
  { value: "Tuesday" },
  { value: "Wednesday" },
  { value: "Thursday" },
  { value: "Friday" },
  { value: "Saturday" },
  { value: "Sunday" },
];

export { CREATE_SCHEDULE_RULE, DAY_OF_WEEK };
