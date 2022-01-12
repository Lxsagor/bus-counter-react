import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Map from "../../assets/map.png";
import { useStyles } from "./styled";
import Bus from "./Bus.js";

const TrackBus = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={2}>
                <Bus />
                <Divider />
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item lg={5}>
                        <Box mt={5}>
                            <Avatar
                                src={Map}
                                alt="map"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 0,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default TrackBus;
