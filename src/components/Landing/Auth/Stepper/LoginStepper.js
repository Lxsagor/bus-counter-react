import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepContent, TextField, Typography } from "@mui/material";

const LoginStepper = () => {
  return (
    <>
      <Stepper activeStep={0} orientation="vertical">
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
    </>
  );
};
export default LoginStepper;
