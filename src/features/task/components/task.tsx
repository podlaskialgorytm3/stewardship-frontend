import { useState } from "react"
import { useParams } from "react-router-dom";

import { CreateTask } from "./create-task"
import { CreateSubtask } from "./create-subtask";
import { TaskAffilation } from './task-affilations';
 
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { StepIcon } from "@mui/material";
import { Button } from "@mui/material";

import { SubtaskInterface, TaskInterface } from '../types/types';
import { DEFAULT_TASK, STEPS } from "../constants/constants";

import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../../../shared/themes/themes";

export const Task: React.FC = () => {
    const { id } = useParams()

    const [activeStep, setActiveStep] = useState(0);
    const [subtasks, setSubtasks] = useState<SubtaskInterface[]>([]);
    const [tasks, setTasks] = useState<TaskInterface>(DEFAULT_TASK)
    const [checked, setChecked] = useState<{memberId: number, check: boolean}[]>([]);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    }

    const handleCheck = (memberId: number) => {
        setChecked((prev) => {
            const index = prev.findIndex((item) => item.memberId === memberId);
            if (index === -1) {
                return [...prev, {memberId, check: true}]
            }
            return prev.map((item) => {
                if (item.memberId === memberId) {
                    return {...item, check: !item.check}
                }
                return item
            })
        })
    }

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <CreateTask tasks={tasks} setTasks={setTasks} />;
            case 1:
                return <CreateSubtask subtasks={subtasks} setSubtasks={setSubtasks} />;
            case 2:
                return <TaskAffilation groupId={id} handleCheck={handleCheck} checked={checked} />;
            default:
                return null;
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
                <div className="flex flex-col items-center">
                    <Stepper activeStep={activeStep} sx={{mt:5, width: "800px"}} >
                        {STEPS.map((step, index) => (
                            <Step key={index} sx={{display: "flex", justifyContent: "space-between", cursor: "pointer"}} onClick={() => setActiveStep(index)}>
                                <StepIcon
                                    icon={index + 1}
                                    sx={{
                                        color: index === activeStep ? '#7e007e' : 'gray',
                                        marginRight: "10px"
                                    }}
                                />
                                <p className={`${activeStep === index ? 'text-[#7e007e]' : 'text-gray-800' }`}>
                                    {step}
                                </p>
                            </Step>
                        ))}
                    </Stepper>
                    {renderStepContent()}
                    <div className="flex justify-between w-[400px]">
                        <Button
                            disabled={activeStep === 0}
                            variant="contained"
                            onClick={handleBack}
                            sx={{
                                mt: 3,
                                width: activeStep === 1 ? "190px" : "400px",
                                display: (activeStep === 1 || activeStep == 2) ? "block" : "none"
                            }}
                        >
                            back
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{
                                mt: 3,
                                width: activeStep === 1 ? "190px" : "400px",
                                display: (activeStep === 0 || activeStep == 1) ? "block" : "none"
                            }}
                        >
                            {activeStep === STEPS.length - 1 ? "finish" : "next"}
                        </Button>
                    </div>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            width: "400px"
                        }}
                    >
                        add task
                    </Button>
                </div>
        </ThemeProvider>
    )
}