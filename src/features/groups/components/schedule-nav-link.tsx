import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export const ScheduleNavLink: React.FC<{ path: string; name: string }> = ({
  path,
  name,
}) => {
  return (
    <NavLink to={path}>
      <Button
        variant="contained"
        color="secondary"
        sx={{ margin: 1, width: "200px" }}
      >
        {name}
      </Button>
    </NavLink>
  );
};
