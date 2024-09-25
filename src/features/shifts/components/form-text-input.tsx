import { TextField } from "@mui/material";
import { CreateShiftPropsInterface } from "../types/types";
import { UseFormRegister, FieldErrors } from "react-hook-form";

const FormTextInput: React.FC<{
  shift: CreateShiftPropsInterface;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  value: string;
}> = ({ shift, register, errors, value }) => {
  return (
    <TextField
      label={shift.label}
      id={shift.name}
      color={"secondary"}
      variant="standard"
      type={shift.type}
      defaultValue={value}
      {...register(shift.name)}
      error={!!errors[shift.name]}
      helperText={errors[shift.name] ? String(errors[shift.name]?.message) : ""}
      fullWidth
    />
  );
};

export { FormTextInput };
