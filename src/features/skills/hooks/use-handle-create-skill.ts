import { useForm } from "react-hook-form";
import { fromZodError } from "zod-validation-error";
import { SkillInterface, SkillSchema } from "../types/types";

import { useCreateSkill } from "../api/use-create-skill";

const useHanbleCreateSkill = ({
  setSkill,
  groupId,
}: {
  setSkill: React.Dispatch<React.SetStateAction<SkillInterface>>;
  groupId: string | undefined;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { mutate } = useCreateSkill();

  const onSubmit = (data: SkillInterface) => {
    try {
      const dataValidate = SkillSchema.parse(data);
      setSkill(dataValidate);
      mutate({ ...dataValidate, groupId });
    } catch (error: any) {
      const validationError = fromZodError(error);
      validationError.details.forEach((detail: any) => {
        setError(detail.path[0], { type: "manual", message: detail.message });
      });
    }
  };

  return { onSubmit, register, errors, handleSubmit };
};

export { useHanbleCreateSkill };
