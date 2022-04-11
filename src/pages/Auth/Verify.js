import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AuthUrl } from "../../constants/urls";
import { changePass } from "../../store/actions/Auth/authActions";
import { AUTH_VALIDATE_ERROR } from "../../store/types";
import { useStyles } from "./styled";

const Verify = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { error, forget } = useSelector((state) => state.auth);
    const { buttonLoading } = useSelector((state) => state.shared);

    const [formData, setFormData] = useState({
        phone: forget,
        password: "",
        password_confirmation: "",
    });
    const classes = useStyles();
    const [errors, setErrors] = useState({
        password: { text: "", show: false },
        password_confirmation: { text: "", show: false },
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

        if (formData.password === "" && formData.password.length < 6) {
            setErrors((prevState) => ({
                ...prevState,
                password: {
                    text: "Password should be minimum 6 characters",
                    show: true,
                },
            }));
        } else if (
            formData.password_confirmation === "" &&
            formData.password_confirmation.length < 6
        ) {
            setErrors((prevState) => ({
                ...prevState,
                password_confirmation: {
                    text: "Password should be minimum 6 characters",
                    show: true,
                },
            }));
        } else {
            dispatch(
                changePass(formData, () => history.push(AuthUrl.auth.login))
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
        <Box py={10}>
            <Container maxWidth="sm" className={classes.forgetRoot}>
                <Box p={10}>
                    <Box px={5}>
                        <form onSubmit={submitHandler}>
                            <Typography variant="body2" mb={1}>
                                <strong>New Password</strong>
                            </Typography>
                            <TextField
                                className={classes.phonefield}
                                fullWidth
                                type="password"
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "password",
                                        e.target.value
                                    )
                                }
                                value={formData.password}
                                error={errors.password.show}
                                helperText={errors.password.text}
                            />
                            <Typography variant="body2" mt={3} mb={1}>
                                <strong>Confirm New Password</strong>
                            </Typography>
                            <TextField
                                className={classes.phonefield}
                                fullWidth
                                type="password"
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                value={formData.password_confirmation}
                                error={errors.password.show}
                                helperText={errors.password.text}
                            />

                            <Button
                                className={classes.sendOtpBTn}
                                fullWidth
                                variant="contained"
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
                                Change Password
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Verify;
