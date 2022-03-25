import { Icon } from "@iconify/react";
import {
    Autocomplete,
    Avatar,
    Button,
    Divider,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Available from "../../../assets/available.png";
import Booked from "../../../assets/booked.png";
import Selected from "../../../assets/selected.png";
import { useStyles } from "./styled";

const SeatSection = ({ data, route, setCollapseStatus }) => {
    const classes = useStyles();
    const [seats, setSeats] = useState([]);
    useEffect(() => {
        if (data?.bus && data?.bus?.total_seat) {
            let seatCount = parseInt(data?.bus?.total_seat);
            let seatItems = [];

            let totalRow = seatCount / 3;
            let seatNames = [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "X",
                "Y",
                "Z",
            ];

            for (let i = 0; i < totalRow; i++) {
                for (let j = 1; j <= 3; j++) {
                    seatItems.push(seatNames[i] + j);
                }
            }

            setSeats(seatItems);
        }
    }, [data?.bus]);

    return (
        <>
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
                <Grid container justifyContent="center">
                    <Grid item lg={3} className={classes.seatBox}>
                        <Grid
                            container
                            justifyContent="flex-end"
                            sx={{ marginBottom: "15px" }}
                        >
                            <Grid item>
                                <Button className={classes.seatBtn} disabled>
                                    <Icon icon="whh:wheel" width="31px" />
                                    <Typography variant="body2">
                                        Driver
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider />

                        <Grid
                            container
                            spacing={5}
                            justifyContent="space-between"
                        >
                            {seats &&
                                seats.map((item, i) => (
                                    <Grid item key={i}>
                                        <Button className={classes.seatBtn}>
                                            <Typography variant="body2">
                                                {item}
                                            </Typography>
                                            <Icon
                                                icon="emojione-monotone:seat"
                                                width="35px"
                                            />
                                        </Button>
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>

                    <Grid item lg={4} sx={{ borderRight: "1px solid black" }}>
                        <Box p={3}>
                            <Typography mb={2} variant="body2">
                                Boarding Point
                            </Typography>
                            <Autocomplete
                                options={data.boarding_counters}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className={classes.field}
                                        label="option"
                                    />
                                )}
                            />
                            <Typography my={2} variant="body2">
                                Dropping Point
                            </Typography>
                            <Autocomplete
                                options={data.dropping_counters}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className={classes.field}
                                        label="option"
                                    />
                                )}
                            />
                            <Typography
                                my={2}
                                variant="h6"
                                color="error"
                                sx={{ textTransform: "uppercase" }}
                            >
                                Seat Information
                            </Typography>
                            <Box className={classes.seatFareBox}>
                                <Typography>SEATS</Typography>
                                <Typography>CLASS</Typography>
                                <Typography>FARE</Typography>
                            </Box>
                            <Box
                                my={1}
                                py={3}
                                px={1}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography>SubTotal:</Typography>
                                <Typography>0৳</Typography>
                            </Box>
                            <Divider />
                            <Box
                                my={1}
                                py={3}
                                px={1}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography>Service Charge:</Typography>
                                <Typography>0৳</Typography>
                            </Box>
                            <Divider />
                            <Box
                                my={1}
                                py={3}
                                px={1}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography>Grand Total:</Typography>
                                <Typography>0৳</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={4}>
                        <Box p={2}>
                            <Typography mb={1} variant="h6" color="error">
                                Type your mobile number
                            </Typography>
                            <Grid
                                container
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item lg={7}>
                                    <TextField
                                        fullWidth
                                        label="Number"
                                        className={classes.field}
                                    />
                                </Grid>
                                <Grid item lg={4}>
                                    <Button
                                        fullWidth
                                        disableElevation
                                        sx={{
                                            textTransform: "capitalize",
                                            minHeight: "55px",
                                        }}
                                        variant="contained"
                                        color="error"
                                    >
                                        Verify
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default SeatSection;
