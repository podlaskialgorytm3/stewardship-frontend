import { useState } from 'react';

import { SubtaskInterface, TaskInterface } from '../types/types';
import { DEFAULT_TASK } from '../constants/constants';

import { CreateTaskInfo } from '../components/create-task-info';
import { CreateSubtask } from '../components/create-subtask';
import { TaskAffilation } from '../components/task-affilations';

import useCreateTask from '../api/use-create-task';
import useErrorMessage from '../../../shared/hooks/use-error-message';

import Swal from 'sweetalert2';

const useHandleCheck = ({
    activeStep,
    setActiveStep,
    groupId
}:{
    activeStep: number,
    setActiveStep: React.Dispatch<React.SetStateAction<number>>,
    groupId: string
}) => {
    const [subtasks, setSubtasks] = useState<SubtaskInterface[]>([]);
    const [tasks, setTasks] = useState<TaskInterface>(DEFAULT_TASK)
    const [checked, setChecked] = useState<{memberId: number, check: boolean}[]>([]);

    const { mutate, isPending, isError, error } = useCreateTask();

    const handleAdd = () => {
        const isTasks = tasks["task-name"] && tasks["start-date"] && tasks["end-date"] && tasks.comments;
        if(isTasks){
            mutate({
                taskInfo: tasks,
                subtasks,
                taskAffilations: checked,
                groupId
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must add information about task!',
                confirmButtonText: "go to first page"
            }).then((result) => {
                if(result.isConfirmed){
                    setActiveStep(0);
                }
            })
        }
    }

    const handleCheck = (memberId: number) => {
        setChecked(prev => {
            const isChecked = prev.find(item => item.memberId === memberId);
            if (isChecked) {
                return prev.map(item => item.memberId === memberId ? { ...item, check: !item.check } : item).filter(item => item.check);
            } else {
                return [...prev, { memberId, check: true }];
            }
        });
    };

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <CreateTaskInfo tasks={tasks} setTasks={setTasks} />;
            case 1:
                return <CreateSubtask subtasks={subtasks} setSubtasks={setSubtasks} />;
            case 2:
                return <TaskAffilation groupId={groupId} handleCheck={handleCheck} checked={checked} />;
            default:
                return null;
        }
    };

    useErrorMessage({isError, error} as {isError: boolean, error: {message: string}});

    return { handleAdd, renderStepContent, isPending };
}

export default useHandleCheck;