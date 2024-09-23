import { Box, Button } from "@mui/material";
import { FormTextInput } from "./form-text-input";
import { CREATE_SCHEDULE_RULE } from "../constants/constants";
import { CreateSchedulePropsInterface } from "../types/types";

const CreateScheduleRule: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">create-schedule-rule</h1>
      <Box
        component="form"
        color={"secondary"}
        //onSubmit={handleSubmit(onSubmit as () => void)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
          margin: "auto",
        }}
      >
        {CREATE_SCHEDULE_RULE.map((rule: CreateSchedulePropsInterface) => (
          <FormTextInput key={rule.name} rule={rule} />
        ))}
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export { CreateScheduleRule };
