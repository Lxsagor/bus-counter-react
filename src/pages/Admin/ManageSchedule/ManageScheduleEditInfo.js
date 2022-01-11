import {
    Box,
    Button,
    Grid,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "date-fns";
import { useStyles } from "./styled";
import { TimePicker } from "@mui/lab";

const ManageScheduleEditInfo = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);

    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Edit Info</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box mt={4}>
                    <Grid container>
                        <Grid item lg={10} xs={12} className={classes.button}>
                            <Button
                                fullWidth
                                variant="contained"
                                style={{ cursor: "initial" }}
                            >
                                <Typography textAlign="left">
                                    DTR- 0000001
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={4}>
                    <Typography variant="h6">Boarding</Typography>
                </Box>
                <Box mt={3}>
                    <Grid container spacing={3} className={classes.field}>
                        <Grid item lg={3} xs={12}>
                            <Typography>From</Typography>
                            <TextField fullWidth />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Typography>To</Typography>
                            <TextField fullWidth />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={4}>
                    <Typography variant="h6">Deprature</Typography>
                </Box>
                <Box mt={3}>
                    <Grid container spacing={3} className={classes.field}>
                        <Grid item lg={3} xs={12}>
                            <Typography>Date</Typography>

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    // label="Subscription End Date"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} fullWidth />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Typography>Time</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} fullWidth />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={4}>
                    <Typography variant="h6">
                        Reason Of Dealay or Canecelation
                    </Typography>
                </Box>
                <Box mt={3}>
                    <Grid container spacing={3} className={classes.textField}>
                        <Grid item lg={6} xs={12}>
                            <TextField fullWidth placeholder="Write here" />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5}>
                    <Grid container spacing={3}>
                        <Grid item lg={3} xs={6} className={classes.button}>
                            <Button fullWidth variant="contained">
                                Save Information
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default ManageScheduleEditInfo;
