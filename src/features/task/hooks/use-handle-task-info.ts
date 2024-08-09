import { taskSchema } from '../utils/utils';
import { useForm } from "react-hook-form";
import { fromZodError } from 'zod-validation-error';
import { TaskInterface } from '../types/types';

import Swal from 'sweetalert2';

const useHandleTask = ({
    setTasks
}:{
    setTasks: React.Dispatch<React.SetStateAction<TaskInterface>>
}) => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm()

    const onSubmit = (data: any) => {
        try{
            const dataValidate = taskSchema.parse(data);
            setTasks(dataValidate);
            Swal.fire({
                title: "Saved!",
                text: "Your task has been saved",
                icon: "info",
                confirmButtonText: "Cool",
            })
        }
        catch (error: any){ {
            const validationError = fromZodError(error);
            validationError.details.forEach((detail: any) => {
                setError(detail.path[0], { type: 'manual', message: detail.message})
            })
            }
        }
    }

    return { onSubmit, register, errors, handleSubmit };
    
}


export default useHandleTask;