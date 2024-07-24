import { useState } from 'react';

import { fromZodError } from 'zod-validation-error';

export const useMutateData = ({
    data,
    schema,
    mutate,
    DEFAULT_STATE,
}:{
    data: Array<string>,
    schema: any,
    mutate: any
    DEFAULT_STATE: object,
}) => {
    const [ formErrors, setFormErrors ] = useState<any>(DEFAULT_STATE);
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const form = data.reduce((acc: any, item: string) => {
            const value = formData.get(item) as string;
            return { ...acc, [item]: value };
        }, {});
        try{
            const parseData = schema.parse(form);
            setFormErrors(DEFAULT_STATE);
            mutate(parseData)
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
        handleSubmit,
        handleChange
    }
}

export default useMutateData;