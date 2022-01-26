/* eslint-disable react/jsx-no-comment-textnodes */
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import LoginStepper from "../../components/Landing/Auth/Stepper/LoginStepper";
import { useStyles } from "./styled";

const Login = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loginBG} pt={10}>
      <Container maxWidth="md">
        <Grid container justifyContent="flex-end" alignItems="left">
          <Grid item lg={1}>
            <Box my={5}>
              <LoginStepper />
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="body2" mb={2}>
              <strong>Phone</strong>
            </Typography>
            <TextField
              className={classes.field}
              fullWidth
              placeholder="Type Your Phone..."

              // InputProps={{
              //   classes: { notchedOutline: classes.specialOutline },
              // }}
            />
            <Typography variant="body2" mb={2}>
              <strong>Password</strong>
            </Typography>
            <TextField
              fullWidth
              className={classes.field}
              type="password"
              placeholder="Type Your Password..."
            />
            <Typography variant="body2" mb={3}>
              <small>
                If Any problem Occur Please Contact Customer Support or 00000
              </small>
            </Typography>
            <Button
              className={classes.loginbtn}
              fullWidth
              variant="contained"
              mb={2}
            >
              Login
            </Button>
            <Typography variant="body2" my={1}>
              <Link> Forget Password?</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
