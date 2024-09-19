import { useForm } from "react-hook-form";
import { fromZodError } from "zod-validation-error";
import { SkillInterface, SkillSchema } from "../types/types";

const useHanbleCreateSkill = ({
  setSkill,
}: {
  setSkill: React.Dispatch<React.SetStateAction<SkillInterface>>;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: SkillInterface) => {
    try {
      const dataValidate = SkillSchema.parse(data);
      setSkill(dataValidate);
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
