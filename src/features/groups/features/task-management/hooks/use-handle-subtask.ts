import { useState } from "react";

import { fromZodError } from "zod-validation-error";

import { SubtaskInterface } from "../types/types";

const useHandleSubtask = ({
  data,
  schema,
  DEFAULT_STATE,
  setSubtasks,
}: {
  data: Array<string>;
  schema: any;
  DEFAULT_STATE: object;
  setSubtasks: React.Dispatch<React.SetStateAction<SubtaskInterface[]>>;
}) => {
  const [formErrors, setFormErrors] = useState<any>(DEFAULT_STATE);

  const handleDelete = (index: number) => {
    setSubtasks((prevSubtasks) => [
      ...prevSubtasks.slice(0, index),
      ...prevSubtasks.slice(index + 1),
    ]);
  };

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = data.reduce((acc: any, item: string) => {
      const value = formData.get(item) as string;
      return { ...acc, [item]: value };
    }, {});
    try {
      const parseData = schema.parse(form);
      setFormErrors(DEFAULT_STATE);
      setSubtasks((prevState: any) => [...prevState, parseData]);
      event.currentTarget.reset();
    } catch (error: any) {
      const validationError = fromZodError(error);
      validationError.details.forEach((detail) => {
        setFormErrors((prevState: any) => ({
          ...prevState,
          [detail.path[0]]: detail.message,
        }));
      });
    }
  };

  const handleChange = (name: string) => {
    setFormErrors((prevState: any) => ({
      ...prevState,
      [name]: "",
    }));
  };

  return {
    formErrors,
    handleAdd,
    handleChange,
    handleDelete,
  };
};

export { useHandleSubtask };
