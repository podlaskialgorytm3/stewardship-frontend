interface ShiftInterface {
  id: string;
  groupId: string;
  nameOfShift: string;
  startFrom: string | "{0-24}:{0-60}";
  startTo: string | "{0-24}:{0-60}";
  endFrom: string | "{0-24}:{0-60}";
  endTo: string | "{0-24}:{0-60}";
  minDailyHours: number;
  maxDailyHours: number;
}

export type { ShiftInterface };
