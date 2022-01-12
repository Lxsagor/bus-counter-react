import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "date-fns";
import { useStyles } from "./styled";
import ManageScheduleTable from "../../../components/ManageSchedule/ManageScheduleTable";
import DataPaginator from "../../../components/shared/DataPaginator";

const ManageSchedule = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);

    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Manage Schedule</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box mt={3}>
                    <Grid container>
                        <Grid item lg={2}>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Search By Day"
                            />
                        </Grid>
                        <Grid item lg={2}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Search By Counter"
                            />
                        </Grid>
                        <Grid item lg={2}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Search By Counter"
                            />
                        </Grid>
                    </Grid>
                    <Box mt={3}>
                        <Grid container spacing={4}>
                            <Grid item lg={4} md={4} xs={12}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        // label="Subscription End Date"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                className={classes.field}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item lg={2} xs={3}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    className={classes.button}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box mt={5} mb={3}>
                    <Grid container justifyContent="space-between">
                        <Grid item lg={2}>
                            <Typography variant="h6">Showing Result</Typography>
                        </Grid>
                        <Grid item lg={2}>
                            <Button
                                fullWidth
                                variant="text"
                                className={classes.pdfButton}
                            >
                                Print as PDF
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <ManageScheduleTable />
                <Box m={3}>
                    <DataPaginator />
                </Box>
            </Box>
        </>
    );
};

export default ManageSchedule;
