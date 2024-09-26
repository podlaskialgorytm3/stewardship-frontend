import { Box, Button, Select, MenuItem, TextField } from "@mui/material";

import { DAY_OF_WEEK } from "../constants/constants";

const CreateDayRestriction: React.FC<{}> = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">create-day-restriction</h1>
      <Box
        component="form"
        color={"secondary"}
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
