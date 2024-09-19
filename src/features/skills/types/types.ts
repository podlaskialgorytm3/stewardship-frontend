import { object, z } from "zod";

const SkillSchema = object({
  skill: z.string().min(3, "Skill must be at least 3 characters"),
  isRemote: z.boolean(),
});

type SkillInterface = z.infer<typeof SkillSchema>;

export { SkillSchema };
export type { SkillInterface };
