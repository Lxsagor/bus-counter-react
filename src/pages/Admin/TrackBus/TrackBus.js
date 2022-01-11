import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Grid,
    TextField,
    Button,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styled";
import Track from "../../../components/TrackBus";

const TrackBus = () => {
    const [value, setValue] = React.useState("");
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Track Bus</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box mt={5} className={classes.field}>
                    <Grid container>
                        <Grid item lg={3} xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Bus Number
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={value}
                                    label="Bus Number"
                                >
                                    <MenuItem value={10}>Bus Number</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={4}>
                    <Grid container spacing={3}>
                        <Grid item lg={6} xs={12} className={classes.field}>
                            <TextField
                                fullWidth
                                placeholder="DHK-GHA-1264551"
                            />
                        </Grid>
                        <Grid item lg={2} xs={3} className={classes.button}>
                            <Button fullWidth variant="contained">
                                Track Bus
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5}>
                    <Track />
                </Box>
            </Box>
        </>
    );
};

export default TrackBus;
