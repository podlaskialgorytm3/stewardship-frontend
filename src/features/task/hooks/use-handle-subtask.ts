import { useState } from 'react';

import { fromZodError } from 'zod-validation-error';

const useHandleSubtask = ({
    data,
    schema,
    DEFAULT_STATE
}:{
    data: Array<string>,
    schema: any,
    DEFAULT_STATE: object
}) => {
    const [ formErrors, setFormErrors ] = useState<any>(DEFAULT_STATE);
    const [subtasks, setSubtasks] = useState<{
        title: string,
        description: string,
        status: string
    }[]>([]);

    const handleDelete = (index: number) => {
        setSubtasks((prevSubtasks) => [...prevSubtasks.slice(0, index), ...prevSubtasks.slice(index + 1)]);
    }
    
    const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("siema")
        const formData = new FormData(event.currentTarget);
        const form = data.reduce((acc: any, item: string) => {
            const value = formData.get(item) as string;
            return { ...acc, [item]: value };
        }, {});
        try{
            const parseData = schema.parse(form);
            setFormErrors(DEFAULT_STATE);
            setSubtasks((prevState: any) => ([...prevState, parseData]));
        }
        catch(error: any){
            const validationError = fromZodError(error);
            validationError.details.forEach((detail) => {
                setFormErrors((prevState: any) => (
                    {
                        ...prevState,
                        [detail.path[0]]: detail.message
                    }
                ))
            })
        }

    }

    const handleChange = (name: string) => {
        setFormErrors((prevState: any) => (
            {
                ...prevState,
                [name]: ''
            }
        ))
    }

    return {
        formErrors,
        handleAdd,
        handleChange,
        handleDelete,
        subtasks
    }
}

export default useHandleSubtask;