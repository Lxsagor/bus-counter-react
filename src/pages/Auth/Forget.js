import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AuthUrl } from "../../constants/urls";
import { forget } from "../../store/actions/authActions";
import { ERROR, TOGGLE_AUTH_LOADING } from "../../store/types";
import { useStyles } from "./styled";

const Forget = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        phone: "",
    });
    const [errors, setErrors] = useState({
        phone: { text: "", show: false },
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
        } else {
            dispatch(
                forget(formData, () => history.push(AuthUrl.auth.otpSend))
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
                type: ERROR,
                payload: null,
            });
        };
    }, [dispatch]);

    return (
        <Box py={10}>
            <Container maxWidth="sm" className={classes.forgetRoot}>
                <Box p={10} className={classes.forgetBox}>
                    <Typography variant="h6" my={3}>
                        Enter Your Phone Number
                    </Typography>
                    <Box px={5}>
                        <form onSubmit={submitHandler}>
                            <TextField
                                fullWidth
                                className={classes.phonefield}
                                placeholder="01***********"
                                onChange={(e) =>
                                    fieldChangeHandler("phone", e.target.value)
                                }
                                value={formData.phone}
                                error={errors.phone.show}
                                helperText={errors.phone.text}
                            />
                            <Button
                                className={classes.sendOtpBTn}
                                fullWidth
                                variant="contained"
                                type="submit"
                            >
                                Send Code
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Forget;
