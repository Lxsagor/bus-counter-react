import React from "react";
import {
    Box,
    Container,
    Button,
    Grid,
    TextField,
    Typography,
    InputAdornment,
    Dialog,
    DialogContent,
} from "@mui/material";
import { useStyles } from "./styled";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "date-fns";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import AddUserDialog from "../../components/AddUserDialog";

const AddCompany = () => {
    const classes = useStyles();
    // const [value, setValue] = React.useState(null);
    const [values, setValues] = React.useState({
        password: "",
        date: null,
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [addUserDialog, setAddUserDialog] = React.useState(false);
    return (
        <>
            {/* <Container> */}
            <Box m={3}>
                <Typography variant="h6">Adding Company</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Grid conatiner>
                    <Grid item lg={9}>
                        <Grid container className={classes.field} spacing={4}>
                            <Grid item lg={4} md={6} xs={12}>
                                <Typography>Company Name</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={4} md={6} xs={12}>
                                <Typography>Email</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={4} md={6} xs={12}>
                                <Typography>Phone</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={4} md={6} xs={12}>
                                <Typography>Number Of User (Max)</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={4} md={6} xs={12}>
                                <Typography>Subscription Start Date</Typography>

                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        // label="Subscription End Date"
                                        value={values.date}
                                        onChange={(newValue) => {
                                            setValues(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} fullWidth />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item lg={4} md={6} xs={12}>
                                <Typography>Subscription End Date</Typography>

                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        // label="Subscription End Date"

                                        value={values.date}
                                        onChange={(newValue) => {
                                            setValues(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} fullWidth />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ marginTop: "50px" }}>
                    <Typography variant="h6">Admin Initial Info</Typography>
                </Box>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Grid container className={classes.field} spacing={4}>
                    <Grid item lg={3} md={6} xs={12}>
                        <Typography>Name</Typography>
                        <TextField fullWidth />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Typography>Phone</Typography>
                        <TextField fullWidth />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Typography>Email</Typography>
                        <TextField fullWidth />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} className={classes.field}>
                        <Typography>Initial Password</Typography>
                        <TextField
                            fullWidth
                            type={values.showPassword ? "text" : "password"}
                            values={values.password}
                            onChange={handleChange("password")}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {values.showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ textTransform: "initial", borderRadius: "8px" }}
                        // onClick={() => setAddUserDialog(true)}
                    >
                        Add User
                    </Button>
                </Box>
                <Dialog
                    maxWidth="sm"
                    open={addUserDialog}
                    onClose={() => setAddUserDialog(false)}
                >
                    <DialogContent>
                        <AddUserDialog />
                    </DialogContent>
                </Dialog>
            </Box>
            {/* </Container> */}
        </>
    );
};

export default AddCompany;
