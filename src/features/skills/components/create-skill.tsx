import { useState } from "react";

import { SkillInterface } from "../types/types";

import { useHanbleCreateSkill } from "../hooks/use-handle-create-skill";

import { BoxElement } from "../../../shared/components/box-element";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";

const CreateSkill: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  const [skill, setSkill] = useState<SkillInterface>({
    skill: "",
    isRemote: false,
  });

  const { onSubmit, register, errors, handleSubmit } = useHanbleCreateSkill({
    setSkill,
    groupId,
  });

  return (
    <>
      <BoxElement size={350}>
        <h1 className="text-2xl font-bold mb-4">create-skill</h1>
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
          <TextField
            label="Skill"
            id="skill"
            color={"secondary"}
            defaultValue={skill.skill}
            {...register("skill")}
            error={!!errors["skill"]}
            helperText={errors["skill"] ? String(errors["skill"]?.message) : ""}
            fullWidth
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                id="isRemote"
                {...register("isRemote")}
                color={"secondary"}
                defaultChecked={skill.isRemote}
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
