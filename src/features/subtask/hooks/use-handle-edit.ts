import Swal from 'sweetalert2';

import { editSubtaskSchema } from '../utils/utils';
import { fromZodError } from 'zod-validation-error';

const useHandleEdit = ({title, description} : {title: string, description: string}) => {
    const handleEdit = (subtaskId: string) => {
        Swal.fire({
            title: 'edit-subtask',
            width: 600,
            html: `
            <div style="display: flex; flex-direction: column;">
                <input id="swal-input1" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 10px;" value="${title}">
                <input id="swal-input2" style="border: 1px solid #ccc; padding: 10px; border-radius: 10px;" value="${description}">
            </div>
            `,
            focusConfirm: false,
            preConfirm: () => {
                try{    
                    const title = (document.getElementById('swal-input1') as HTMLInputElement).value;
                    const description = (document.getElementById('swal-input2') as HTMLInputElement).value;
                    editSubtaskSchema.parse({ title, description });
                    return { title, description };
                }
                catch(error: any){
                    const validationError = fromZodError(error);
                    validationError.details.forEach((detail) => {
                        Swal.showValidationMessage(detail.message);
                    })
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // handle edit
            }
        });
    }

    return {
        handleEdit
    }
}

export default useHandleEdit;