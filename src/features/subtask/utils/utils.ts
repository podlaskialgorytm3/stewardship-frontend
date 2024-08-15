import { z } from "zod";

export const editSubtaskSchema = z.object({
    title: z.string().min(3, "Title must have at least 3 character"),
    description: z.string().min(3, "Description must have at least 3 character"),
});

