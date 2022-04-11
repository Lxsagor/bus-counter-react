import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AuthUrl } from "../../constants/urls";
import { confirm, resend } from "../../store/actions/Auth/authActions";
import { AUTH_VALIDATE_ERROR } from "../../store/types";
import { useStyles } from "./styled";

const OTPpage = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { forget } = useSelector((state) => state.auth);
    const { buttonLoading } = useSelector((state) => state.shared);

    const [OTP, setOTP] = useState("");
    function handleChange(OTP) {
        setOTP(OTP);
    }
    const submitHandler = (e) => {
        e.preventDefault();

        const newRecord = {
            phone: forget,
            code: OTP,
        };

        dispatch(confirm(newRecord, () => history.push(AuthUrl.auth.verify)));
    };

    const handleCode = () => {
        const newRecord = {
            phone: forget,
        };

        dispatch(
            resend(newRecord, () => {
                // navigate("/verify");
            })
        );
    };
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
                <Box p={5} className={classes.forgetBox}>
                    <Typography variant="h6" mb={1}>
                        Enter OTP We Have Sent To Your Mobile Number
                    </Typography>
                    <Typography variant="h4" mb={1}>
                        {forget}
                    </Typography>
                    <Box px={5}>
                        <form onSubmit={submitHandler}>
                            <OtpInput
                                onChange={handleChange}
                                value={OTP}
                                inputStyle={classes.inputStyle}
                                numInputs={6}
                                separator={<span></span>}
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
                                Verify
                            </Button>
                        </form>
                    </Box>
                    <Typography variant="body2" mt={2}>
                        Didn't get the code?
                    </Typography>
                    <Typography variant="body2" mt={1}>
                        <Typography
                            onClick={handleCode}
                            style={{
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                        >
                            Resend
                        </Typography>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default OTPpage;
