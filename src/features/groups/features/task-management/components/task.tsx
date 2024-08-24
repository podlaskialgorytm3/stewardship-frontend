import { useState } from "react";
import { useParams } from "react-router-dom";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepIcon } from "@mui/material";
import { Button } from "@mui/material";

import { STEPS } from "../constants/constants";

import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../../../../../shared/themes/themes";

import useHandleTask from "../hooks/use-handle-task";
import Loading from "../../../../../shared/components/loading";

export const Task: React.FC = () => {
  const { id = "" } = useParams();

  const [activeStep, setActiveStep] = useState(0);

  const { handleAdd, renderStepContent, isPending } = useHandleTask({
    activeStep,
    setActiveStep,
    groupId: id,
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="flex flex-col items-center">
        <Stepper activeStep={activeStep} sx={{ mt: 5, width: "800px" }}>
          {STEPS.map((step, index) => (
            <Step
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setActiveStep(index)}
            >
              <StepIcon
                icon={index + 1}
                sx={{
                  color: index === activeStep ? "#7e007e" : "gray",
                  marginRight: "10px",
                }}
              />
              <p
                className={`${
                  activeStep === index ? "text-[#7e007e]" : "text-gray-800"
                }`}
              >
                {step}
              </p>
            </Step>
          ))}
        </Stepper>
        {isPending ? <Loading size={150} /> : renderStepContent()}
        <div className="flex justify-between w-[400px]">
          <Button
            disabled={activeStep === 0}
            variant="contained"
            onClick={handleBack}
            sx={{
              mt: 3,
              width: activeStep === 1 ? "190px" : "400px",
              display: activeStep === 1 || activeStep === 2 ? "block" : "none",
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
              display: activeStep === 0 || activeStep === 1 ? "block" : "none",
            }}
          >
            {activeStep === STEPS.length - 1 ? "finish" : "next"}
          </Button>
        </div>
        <Button
          fullWidth
          variant="contained"
          onClick={handleAdd}
          sx={{
            mt: 3,
            width: "400px",
          }}
        >
          add task
        </Button>
      </div>
    </ThemeProvider>
  );
};
