import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepContent, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  stepper: {
    "& .MuiStepConnector-line": {
      minHeight: "90px !important",
    },
  },
}));

const LoginStepper = () => {
  const classes = useStyles();
  return (
    <Box sx={{ height: "100%" }}>
      <Stepper
        activeStep={0}
        orientation="vertical"
        className={classes.stepper}
      >
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
};
export default LoginStepper;
