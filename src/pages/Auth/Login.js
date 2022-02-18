/* eslint-disable react/jsx-no-comment-textnodes */
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoginStepper from "../../components/Landing/Auth/Stepper/LoginStepper";
import { AdminUrl, CounterUrl, SuperAdminUrl } from "../../constants/urls";
import {
    login,
    togglebuttonLoading,
} from "../../store/actions/Auth/authActions";
import { AUTH_VALIDATE_ERROR, TOGGLE_BUTTON_LOADING } from "../../store/types";
import { useStyles } from "./styled";
import BeatLoader from "react-spinners/BeatLoader";

const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const { buttonLoading } = useSelector((state) => state.shared);
    const dispatch = useDispatch();
    const [currentStep, setCurrentStep] = useState(0);
    const { error } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        phone: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        phone: { text: "", show: false },
        password: { text: "", show: false },
    });

    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.phone === "" && formData.phone.length < 11) {
            setErrors((prevState) => ({
                ...prevState,
                phone: { text: "phone format not valid", show: true },
            }));
        } else if (formData.password === "" && formData.password.length < 6) {
            setErrors((prevState) => ({
                ...prevState,
                password: {
                    text: "Password should be minimum 6 characters",
                    show: true,
                },
            }));
        } else {
            dispatch(
                login(formData, () => history.push(CounterUrl.dashboard.index))
            );
        }
    };

    useEffect(() => {
        if (error && Object.keys(error).length > 0) {
            Object.keys(error).forEach((key) => {
                setErrors((prevState) => ({
                    ...prevState,
                    [key]: { text: error[key][0], show: true },
                }));
            });
        }
    }, [error]);

    useEffect(() => {
        return () => {
            dispatch({
                type: AUTH_VALIDATE_ERROR,
                payload: null,
            });
        };
    }, [dispatch]);

    return (
        <Box className={classes.loginBG} pt={10}>
            <Container maxWidth="md">
                <Grid container justifyContent="flex-end" alignItems="left">
                    <Grid item lg={1}>
                        <Box my={5}>
                            <LoginStepper currentStep={currentStep} />
                        </Box>
                    </Grid>
                    <Grid item lg={4}>
                        <form onSubmit={submitHandler}>
                            <Typography variant="body2" mb={2}>
                                <strong>Phone</strong>
                            </Typography>
                            <TextField
                                className={classes.field}
                                fullWidth
                                placeholder="01*********"
                                type="phone"
                                onChange={(e) =>
                                    fieldChangeHandler("phone", e.target.value)
                                }
                                value={formData.phone}
                                onFocus={() => setCurrentStep(0)}
                                error={errors.phone.show}
                                helperText={errors.phone.text}
                            />
                            <Typography variant="body2" mb={2}>
                                <strong>Password</strong>
                            </Typography>
                            <TextField
                                fullWidth
                                className={classes.field}
                                type="password"
                                placeholder="Type Your Password..."
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "password",
                                        e.target.value
                                    )
                                }
                                onFocus={() => setCurrentStep(1)}
                                value={formData.password}
                                error={errors.password.show}
                                helperText={errors.password.text}
                            />
                            <Typography variant="body2" mb={3}>
                                <small>
                                    If Any problem Occur Please Contact Customer
                                    Support or 00000
                                </small>
                            </Typography>
                            <Button
                                className={classes.loginbtn}
                                fullWidth
                                variant="contained"
                                mb={2}
                                type="submit"
                                {...(buttonLoading && {
                                    disabled: true,
                                    startIcon: (
                                        <BeatLoader
                                            color="white"
                                            loading={true}
                                            size={10}
                                        />
                                    ),
                                })}
                            >
                                Login
                            </Button>
                        </form>
                        <Typography variant="body2" my={1}>
                            <Link to="/forget"> Forget Password?</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Login;
