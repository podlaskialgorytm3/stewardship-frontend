import { object, z } from "zod";

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

interface CreateShiftInterface {
  nameOfShift: string;
  startFrom: string;
  startTo: string;
  endFrom: string;
  endTo: string;
  minDailyHours: number;
  maxDailyHours: number;
}

interface CreateShiftPropsInterface {
  name: string;
  type: string;
  label: string;
}

const CreateShiftSchema = object({
  nameOfShift: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  startFrom: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format" }),
  startTo: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format" }),
  endFrom: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format" }),
  endTo: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Invalid time format" }),
  minDailyHours: z
    .number()
    .min(1, { message: "Must be at least 1" })
    .max(24, { message: "Must be at most 24" }),
  maxDailyHours: z
    .number()
    .min(1, { message: "Must be at least 1" })
    .max(24, { message: "Must be at most 24" }),
});

export type { ShiftInterface, CreateShiftInterface, CreateShiftPropsInterface };
export { CreateShiftSchema };
