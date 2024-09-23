import { TextField } from "@mui/material";
import { CreateSchedulePropsInterface } from "../types/types";

const FormTextInput: React.FC<{ rule: CreateSchedulePropsInterface }> = ({
  rule,
}) => {
  return (
    <TextField
      label={rule.label}
      id={rule.name}
      color={"secondary"}
      variant="standard"
      type={rule.type}
      //defaultValue={skill.skill}
      //{...register("skill")}
      //error={!!errors["skill"]}
      //helperText={errors["skill"] ? String(errors["skill"]?.message) : ""}
      fullWidth
      required
    />
  );
};

export { FormTextInput };
