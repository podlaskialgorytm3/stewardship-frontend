import { z, object } from "zod";

interface EmploymentTypeInterface {
  id: string;
  employmentName: string;
  workingHours: number;
}

interface CreateEmploymentTypeInterface {
  employmentName: string;
  workingHours: number;
}

interface EmploymentTypePropsInterface {
  name: string;
  type: string;
  label: string;
}

const EmploymentTypeSchema = object({
  employmentName: z.string().min(3, { message: "Name is too short" }),
  workingHours: z.number().max(672, { message: "Working hours is too long" }),
});

export type {
  EmploymentTypeInterface,
  CreateEmploymentTypeInterface,
  EmploymentTypePropsInterface,
};

export { EmploymentTypeSchema };
