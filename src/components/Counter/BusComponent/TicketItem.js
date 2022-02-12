import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { useStyles } from "./styled";
import { Icon } from "@iconify/react";

const TicketItem = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container alignItems="center">
                <Grid item lg={7} xs={12}>
                    <Box className={classes.ticketItemRoot}>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Grid item lg={2}>
                                <Box className={classes.ticketIcon}>
                                    <Icon
                                        icon="fa-solid:ticket-alt"
                                        width="50%"
                                        height="50%"
                                    />
                                </Box>
                            </Grid>
                            <Divider orientation="vertical" flexItem />

                            <Grid item lg={7}>
                                <Typography
                                    variant="body2"
                                    mb={1}
                                    className={classes.pnrFont1}
                                >
                                    PNR Number: DTR-125411234
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className={classes.pnrFont2}
                                >
                                    Ticket Printed Few Moments Ago
                                </Typography>
                            </Grid>
                            <Grid item lg={2}>
                                <Box mr={2}>
                                    <Button
                                        fullWidth
                                        className={classes.prntBtn}
                                    >
                                        Print Again
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default TicketItem;
