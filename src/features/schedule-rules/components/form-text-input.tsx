import { TextField } from "@mui/material";
import { CreateSchedulePropsInterface } from "../types/types";

const FormTextInput: React.FC<{
  rule: CreateSchedulePropsInterface;
  register: any;
  errors: any;
  value: string;
}> = ({ rule, register, errors, value }) => {
  return (
    <TextField
      label={rule.label}
      id={rule.name}
      color={"secondary"}
      variant="standard"
      type={rule.type}
      defaultValue={value}
      {...register(rule.name)}
      error={!!errors[rule.name]}
      helperText={errors[rule.name] ? String(errors[rule.name]?.message) : ""}
      fullWidth
    />
  );
};

export { FormTextInput };
