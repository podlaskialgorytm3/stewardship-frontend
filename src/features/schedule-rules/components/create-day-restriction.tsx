import { useState } from "react";

import { Box, Button, Select, MenuItem, TextField } from "@mui/material";

import { DAY_OF_WEEK } from "../constants/constants";

import { useHandleCreateDayRestriction } from "../hooks/use-handle-create-day-restriction";

const CreateDayRestriction: React.FC<{
  groupId: string | undefined;
  scheduleRuleId: string;
}> = ({ groupId, scheduleRuleId }) => {
  const [dayRestriction, setDayRestriction] = useState({
    dayOfWeek: "",
    maxFollowingDay: 0,
  });

  const { onSubmit, register, errors, handleSubmit } =
    useHandleCreateDayRestriction({
      setDayRestriction,
      groupId,
      scheduleRuleId,
    });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">create-day-restriction</h1>
      <Box
        component="form"
        color={"secondary"}
        onSubmit={handleSubmit(onSubmit as () => void)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
          margin: "auto",
        }}
      >
        <Select
          label="Day of week"
          id="dayOfWeek"
          color={"secondary"}
          variant="standard"
          {...register("dayOfWeek")}
          error={!!errors.dayOfWeek}
          defaultValue={dayRestriction.dayOfWeek}
          fullWidth
        >
          {DAY_OF_WEEK.map((day: { value: string }) => (
            <MenuItem key={day.value} value={day.value}>
              {day.value}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="max following days"
          id="maxFollowingDay"
          color={"secondary"}
          variant="standard"
          type="number"
          fullWidth
          {...register("maxFollowingDay")}
          error={!!errors.maxFollowingDay}
          defaultValue={dayRestriction.maxFollowingDay}
          helperText={
            errors.maxFollowingDay
              ? String(errors.maxFollowingDay?.message)
              : ""
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ marginTop: "10px" }}
        >
          create
        </Button>
      </Box>
    </div>
  );
};

export { CreateDayRestriction };
