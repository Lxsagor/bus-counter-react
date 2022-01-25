import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./style";
import LoginStepper from "../../components/Landing/Auth/Stepper/LoginStepper";
import { Link } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.loginBG}>
        <Grid container justifyContent="right" alignItems="left">
          <Grid item lg={4}>
            <Box className={classes.login}>
              <Box className={classes.stepper} m={5} sx={{ height: "100px" }}>
                <LoginStepper />
              </Box>
              <Box className={classes.loginForm} my={4}>
                <Typography variant="body2" mb={2}>
                  <strong>Phone</strong>
                </Typography>
                <TextField
                  className={classes.field}
                  fullWidth
                  placeholder="Type Your Phone..."
                />
                <Typography variant="body2" mb={2}>
                  <strong>Password</strong>
                </Typography>
                <TextField
                  mb={3}
                  fullWidth
                  placeholder="Type Your password..."
                />
                <Box className={classes.contact} my={4}>
                  <Typography variant="body2" mb={3}>
                    <small>
                      {" "}
                      If Any problem Occur Please Contact Customre Support or
                      00000
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
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
