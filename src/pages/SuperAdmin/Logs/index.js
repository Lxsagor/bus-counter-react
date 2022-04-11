import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import "date-fns";
import { useStyles } from "./styled";
import LogsTable from "../../../components/SuperAdmin/Logs/LogsTable";
import DataPaginator from "../../../components/shared/DataPaginator";

const Logs = () => {
    const [value, setValue] = React.useState(null);
    const classes = useStyles();

    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Logs</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Grid container>
                    <Grid item lg={8} xs={12}>
                        <Grid container spacing={4} className={classes.field}>
                            <Grid item lg={6}>
                                <TextField fullWidth placeholder="SR group" />
                            </Grid>
                            <Grid item lg={4}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        label="Select Date"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item lg={2}>
                                <Button
                                    size="large"
                                    fullWidth
                                    variant="contained"
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box my={3}>
                    <LogsTable />
                </Box>
                <Box m={3}>
                    <DataPaginator />
                </Box>
            </Box>
        </>
    );
};

export default Logs;
