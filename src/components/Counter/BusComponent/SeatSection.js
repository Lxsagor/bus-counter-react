import { Icon } from "@iconify/react";
import {
    Autocomplete,
    Avatar,
    Button,
    Divider,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Available from "../../../assets/available.png";
import Booked from "../../../assets/booked.png";
import Selected from "../../../assets/selected.png";
import { useStyles } from "./styled";

const SeatSection = ({ data, route, setCollapseStatus }) => {
    const classes = useStyles();
    const [seats, setSeats] = useState([]);
    const [form, setForm] = useState({
        seat_no: [],
        subTotal: 0,
        fare: 0,
        service_charge: 0,
        total_fare: 0,
        boarding_point: null,
        dropping_point: null,
        phone: "",
    });
    const [value, setValue] = useState({
        x: 0,
        y: 0,
        row: 0,
    });
    useEffect(() => {
        let totalSeat = data.bus.total_seat;
        let x = value.x;
        let y = value.y;
        let row = parseInt(totalSeat / (x + y));
        if (data.bus.layout === "1-1") {
            setValue((prevState) => ({
                ...prevState,
                x: 1,
                y: 1,
                row: row,
            }));
        }
        if (data.bus.layout === "1-2") {
            setValue((prevState) => ({
                ...prevState,
                x: 1,
                y: 2,
                row: row,
            }));
        }
        if (data.bus.layout === "2-1") {
            setValue((prevState) => ({
                ...prevState,
                x: 2,
                y: 1,
                row: row,
            }));
        }
        if (data.bus.layout === "2-2") {
            setValue((prevState) => ({
                ...prevState,
                x: 2,
                y: 2,
                row: row,
            }));
        }
        if (data.bus.layout === "3-2") {
            setValue((prevState) => ({
                ...prevState,
                x: 3,
                y: 2,
                row: row,
            }));
        }
        if (data.bus.layout === "3-3") {
            setValue((prevState) => ({
                ...prevState,
                x: 3,
                y: 3,
                row: row,
            }));
        }
    }, [data.bus.layout, data.bus.total_seat, value.x, value.y]);
    const seatBookHandler = useCallback(
        (seatName) => {
            let selectedSeats = [...form.seat_no];

            if (selectedSeats.includes(seatName)) {
                selectedSeats = selectedSeats.filter(
                    (item) => item !== seatName
                );
            } else {
                if (selectedSeats.length > 3) {
                    toast.error("A user can select only 4 seats");
                } else {
                    selectedSeats.push(seatName);
                }
            }

            setForm((prevState) => ({
                ...prevState,
                seat_no: selectedSeats,
            }));
        },
        [form.seat_no]
    );
    const renderClass = useCallback(
        (item) => {
            let classNames = classes.seatBtn + " ";

            if (form.seat_no.includes(item)) {
                classNames += classes.selectSeatBtn + " ";
            }

            return classNames;
        },
        [classes.seatBtn, classes.selectSeatBtn, form.seat_no]
    );
    const seatColumn = useCallback(
        (rowPosition, seatNumbers) => {
            let columns = value.x + value.y + 1;
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

            let x = value.x;
            let y = value.y;

            let seats = [];
            for (let j = 1; j <= columns; j++) {
                if (j <= x) {
                    seats.push(
                        <TableCell className={classes.actionCell}>
                            <Button
                                className={renderClass(
                                    seatNames[rowPosition] + j
                                )}
                                onClick={() =>
                                    seatBookHandler(seatNames[rowPosition] + j)
                                }
                            >
                                <Typography>
                                    {seatNames[rowPosition] + j}
                                </Typography>
                                <Icon
                                    icon="emojione-monotone:seat"
                                    width="25px"
                                />
                            </Button>
                        </TableCell>
                    );
                    seatNumbers.push(seatNames[rowPosition] + j);
                } else if (j === x + 1) {
                    let seatXY = x + y;
                    let modulas = data.bus.total_seat % seatXY;

                    if (
                        rowPosition + 1 === parseInt(value.row) &&
                        modulas > 0
                    ) {
                        seats.push(
                            <TableCell className={classes.actionCell}>
                                <Button
                                    className={renderClass(
                                        seatNames[rowPosition] + "M"
                                    )}
                                    onClick={() =>
                                        seatBookHandler(
                                            seatNames[rowPosition] + "M"
                                        )
                                    }
                                >
                                    <Typography>
                                        {seatNames[rowPosition] + "M"}
                                    </Typography>
                                    <Icon
                                        icon="emojione-monotone:seat"
                                        width="25px"
                                    />
                                </Button>
                            </TableCell>
                        );
                        seatNumbers.push(seatNames[rowPosition] + "M");
                    } else {
                        seats.push(
                            <TableCell
                                className={classes.actionCell}
                            ></TableCell>
                        );
                    }
                } else {
                    seats.push(
                        <TableCell className={classes.actionCell}>
                            <Button
                                className={renderClass(
                                    seatNames[rowPosition] + (j - 1)
                                )}
                                onClick={() =>
                                    seatBookHandler(
                                        seatNames[rowPosition] + (j - 1)
                                    )
                                }
                            >
                                <Typography>
                                    {seatNames[rowPosition] + (j - 1)}
                                </Typography>
                                <Icon
                                    icon="emojione-monotone:seat"
                                    width="25px"
                                />
                            </Button>
                        </TableCell>
                    );
                    seatNumbers.push(seatNames[rowPosition] + (j - 1));
                }
            }

            return seats;
        },
        [
            classes.actionCell,
            data.bus.total_seat,
            renderClass,
            seatBookHandler,
            value.row,
            value.x,
            value.y,
        ]
    );

    const seatLayout = useCallback(() => {
        let seatRows = [];
        let seatNumbers = [];

        for (let i = 1; i <= value.row; i++) {
            seatRows.push(
                <TableRow>{seatColumn(i - 1, seatNumbers)}</TableRow>
            );
        }

        return {
            seatRows,
            seatNumbers,
        };
    }, [seatColumn, value.row]);
    const fieldChangeHandler = (field, value) => {
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    useEffect(() => {
        if (form.seat_no) {
            setForm((prevState) => ({
                ...prevState,
                fare: route.fares
                    .map((fare) => parseInt(fare.fare))
                    .reduce((prev, curr) => prev + curr, 0),
                subTotal: form.seat_no.length * form.fare,
                service_charge: 60,
                total_fare: form.subTotal + form.service_charge,
            }));
        }
    }, [
        form.fare,
        form.seat_no,
        form.service_charge,
        form.subTotal,
        route.fares,
    ]);

    console.log("form", form);

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

                        <Grid container justifyContent="space-between">
                            <Grid item lg={12}>
                                <TableContainer sx={{ width: 310 }}>
                                    <Table>
                                        <TableBody>
                                            {seatLayout().seatRows}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
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
                                value={form.boarding_point}
                                onChange={(e, data) =>
                                    fieldChangeHandler("boarding_point", data)
                                }
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
                                value={form.dropping_point}
                                onChange={(e, data) =>
                                    fieldChangeHandler("dropping_point", data)
                                }
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
                            {form.seat_no.length > 0 &&
                                form.seat_no.map((item, i) => (
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <Typography
                                            sx={{ padding: "0px 10px" }}
                                        >
                                            {item}
                                        </Typography>
                                        <Typography>{form.fare}</Typography>
                                    </Box>
                                ))}
                            <Box
                                my={1}
                                py={3}
                                px={1}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography>SubTotal:</Typography>
                                {form?.subTotal ? (
                                    <Typography>{form.subTotal} ৳</Typography>
                                ) : (
                                    <Typography>0৳</Typography>
                                )}
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
                                {form?.subTotal ? (
                                    <Typography>
                                        {form.service_charge} ৳
                                    </Typography>
                                ) : (
                                    <Typography>0৳</Typography>
                                )}
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
                                {form?.subTotal ? (
                                    <Typography>{form.total_fare} ৳</Typography>
                                ) : (
                                    <Typography>0৳</Typography>
                                )}
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
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Grid>
                                <Grid item lg={4}>
                                    <Button
                                        disabled={!form.phone}
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
