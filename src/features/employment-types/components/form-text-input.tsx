import { TextField } from "@mui/material";
import { EmploymentTypePropsInterface } from "../types/types";
import { UseFormRegister, FieldErrors } from "react-hook-form";

const FormTextInput: React.FC<{
  employmentType: EmploymentTypePropsInterface;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  value: string;
}> = ({ employmentType, register, errors, value }) => {
  return (
    <TextField
      label={employmentType.label}
      id={employmentType.name}
      color={"secondary"}
      variant="standard"
      type={employmentType.type}
      defaultValue={value}
      {...register(employmentType.name)}
      error={!!errors[employmentType.name]}
      helperText={
        errors[employmentType.name]
          ? String(errors[employmentType.name]?.message)
          : ""
      }
      fullWidth
    />
  );
};

export { FormTextInput };
