import { Icon } from "@iconify/react";
import {
    Autocomplete,
    Avatar,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import Available from "../../../assets/available.png";
import Booked from "../../../assets/booked.png";
import Selected from "../../../assets/selected.png";
import { LandingUrl } from "../../../constants/urls";
import { useStyles } from "./styled";

const BusSeat = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Box className={classes.busSeat}>
            <Box mb={4} pt={3}>
                <Grid
                    container
                    spacing={8}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Button className={classes.statusBtn}>
                            <Avatar src={Available} />
                            <Typography variant="body2">Available</Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.statusBtn}>
                            <Avatar src={Booked} />
                            <Typography variant="body2">Booked</Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.statusBtn}>
                            <Avatar src={Selected} />
                            <Typography variant="body2">Selected</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box pb={3}>
                <Container maxWidth="md">
                    <Grid container spacing={3} justifyContent="flex-end">
                        <Grid item xs={12} lg={4} className={classes.busRoot}>
                            <Grid container justifyContent="flex-end">
                                <Grid item lg={4}>
                                    <Button className={classes.seatBtn}>
                                        <Icon icon="whh:wheel" width="31px" />
                                        <Typography variant="body2">
                                            Driver
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item lg={5}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            A1
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button
                                        className={`${classes.seatBtn} ${classes.selectSeatBtn}`}
                                    >
                                        <Typography variant="body2">
                                            A2
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            A3
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={5}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            B1
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button
                                        className={`${classes.seatBtn} ${classes.bookSeatBtn}`}
                                    >
                                        <Typography variant="body2">
                                            B2
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            B3
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>{" "}
                                <Grid item lg={5}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            A1
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button
                                        className={`${classes.seatBtn} ${classes.selectSeatBtn}`}
                                    >
                                        <Typography variant="body2">
                                            A2
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            A3
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={5}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            B1
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button
                                        className={`${classes.seatBtn} ${classes.bookSeatBtn}`}
                                    >
                                        <Typography variant="body2">
                                            B2
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            B3
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>{" "}
                                <Grid item lg={5}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            A1
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button
                                        className={`${classes.seatBtn} ${classes.selectSeatBtn}`}
                                    >
                                        <Typography variant="body2">
                                            A2
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            A3
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={5}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            B1
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button
                                        className={`${classes.seatBtn} ${classes.bookSeatBtn}`}
                                    >
                                        <Typography variant="body2">
                                            B2
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            B3
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>{" "}
                                <Grid item lg={5}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            A1
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button
                                        className={`${classes.seatBtn} ${classes.selectSeatBtn}`}
                                    >
                                        <Typography variant="body2">
                                            A2
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            A3
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={5}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            B1
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button
                                        className={`${classes.seatBtn} ${classes.bookSeatBtn}`}
                                    >
                                        <Typography variant="body2">
                                            B2
                                        </Typography>
                                        <Icon
                                            icon="emojione-monotone:seat"
                                            width="35px"
                                        />
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button className={classes.seatBtn}>
                                        <Typography variant="body2">
                                            B3
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
                                        Boarding Point
                                    </Typography>
                                    <Autocomplete
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                className={classes.point}
                                            />
                                        )}
                                    />
                                </Box>
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
                                        onClick={() =>
                                            history.push(
                                                LandingUrl.landing.ticketpay.replace()
                                            )
                                        }
                                    >
                                        Confirm Ticket
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default BusSeat;
