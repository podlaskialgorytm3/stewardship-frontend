import { BoxElement } from "../../../shared/components/box-element";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";

const CreateSkill: React.FC = () => {
  return (
    <>
      <BoxElement size={350}>
        <h1 className="text-2xl font-bold mb-4">create-skill</h1>
        <Box
          component="form"
          color={"secondary"}
          //onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "300px",
            margin: "auto",
          }}
        >
          <TextField
            label="Skill"
            name="skill"
            color={"secondary"}
            // value={formData.skill}
            // onChange={handleChange}
            fullWidth
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                name="isRemote"
                color={"secondary"}
                //checked={formData.isRemote}
                //onChange={handleChange}
              />
            }
            label="Is Remote"
          />
          <Button type="submit" variant="contained" color="secondary">
            Submit
          </Button>
        </Box>
      </BoxElement>
    </>
  );
};

export { CreateSkill };
