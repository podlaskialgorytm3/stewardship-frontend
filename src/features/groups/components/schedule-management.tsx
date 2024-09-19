import { Button } from "@mui/material";

export const ScheduleManagement: React.FC = () => {
  return (
    <>
      <h1 className="font-bold text-xl">schedule-management</h1>
      <div className="mt-5 flex flex-wrap justify-around items-around w-full">
        <Button
          variant="contained"
          color="secondary"
          sx={{ margin: 1, width: "200px" }}
        >
          skill
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ margin: 1, width: "200px" }}
        >
          schedule-rules
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ margin: 1, width: "200px" }}
        >
          shifts
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ margin: 1, width: "200px" }}
        >
          employment-type
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ margin: 1, width: "200px" }}
        >
          work-schedule
        </Button>
      </div>
    </>
  );
};
