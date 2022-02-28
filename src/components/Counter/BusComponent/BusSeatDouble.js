import React, { useState } from "react";
import {
    Avatar,
    Button,
    Container,
    Divider,
    Fade,
    Grid,
    Slide,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
// import React, { useRef, useState } from "react";
import { useStyles } from "./styled";
import Busimage from "../../../assets/bus.png";
import Available from "../../../assets/available.png";
import Booked from "../../../assets/booked.png";
import Selected from "../../../assets/selected.png";
import { Icon } from "@iconify/react";
import BusTicket from "./BusTicket";

const BusSeatDouble = () => {
    const classes = useStyles();

    const [confirm, setConfirm] = useState(false);

    return (
        <>
            {!confirm ? (
                <Box>
                    <Box py={2}>
                        <Divider />
                    </Box>

                    <Box mb={4}>
                        <Grid
                            container
                            spacing={8}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <Button className={classes.statusBtn}>
                                    <Avatar src={Available} />
                                    <Typography variant="body2">
                                        Available
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.statusBtn}>
                                    <Avatar src={Booked} />
                                    <Typography variant="body2">
                                        Booked
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.statusBtn}>
                                    <Avatar src={Selected} />
                                    <Typography variant="body2">
                                        Selected
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box pb={3}>
                        <Container maxWidth="sm">
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    lg={6}
                                    className={classes.busRoot}
                                >
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Icon
                                                    icon="whh:wheel"
                                                    width="31px"
                                                />
                                                <Typography variant="body2">
                                                    Driver
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        container
                                        spacing={2}
                                        justifyContent="space-between"
                                    >
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    A1
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    A2
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                className={`${classes.seatBtn} ${classes.selectSeatBtn}`}
                                            >
                                                <Typography variant="body2">
                                                    A3
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    A4
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    B1
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    B2
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                className={`${classes.seatBtn} ${classes.bookSeatBtn}`}
                                            >
                                                <Typography variant="body2">
                                                    B3
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    B4
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    C1
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    C2
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    C3
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    C4
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    D1
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    D2
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    D3
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    D4
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    E1
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    E2
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    E3
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    E4
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    F1
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    F2
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    F3
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    F4
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    G1
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    G2
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    G3
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                            <Button className={classes.seatBtn}>
                                                <Typography variant="body2">
                                                    G4
                                                </Typography>
                                                <Icon
                                                    icon="emojione-monotone:seat"
                                                    width="35px"
                                                />
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Box pl={6}>
                                        <Typography className={classes.fare}>
                                            Fare $800
                                        </Typography>
                                        <Box my={4}>
                                            <Typography variant="h5" mb={3}>
                                                Passenger Name
                                            </Typography>
                                            <TextField
                                                className={classes.field}
                                                fullWidth
                                                placeholder="Enter Name"
                                            />
                                        </Box>
                                        <Box my={4}>
                                            <Typography variant="h5" mb={3}>
                                                Phone Number
                                            </Typography>
                                            <TextField
                                                className={classes.field}
                                                fullWidth
                                                placeholder="Phone Number"
                                            />
                                        </Box>
                                        <Box my={4}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                className={classes.confirmBtn}
                                                onClick={() => setConfirm(true)}
                                            >
                                                Confirm Ticket
                                            </Button>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                className={classes.cancelBtn}
                                            >
                                                Cancel
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            ) : (
                <BusTicket />
            )}
        </>
    );
};

export default BusSeatDouble;
