import { useState } from "react"

import { CreateTask } from "./create-task"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { StepIcon } from "@mui/material";

const STEPS = [
    'create-task',
    'create-subtask',
    'add-members',
]

export const Task: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <CreateTask handleNext={handleNext} />;
            case 1:
                return "Subtask";
            case 2:
                return "Members";
            default:
                return null;
        }
    };

    return (
        <div>
            <Stepper activeStep={activeStep} sx={{mt:5, width: "800px"}} >
                {STEPS.map((step, index) => (
                    <Step key={index} sx={{display: "flex", justifyContent: "space-between"}}>
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
        </div>
    )
}