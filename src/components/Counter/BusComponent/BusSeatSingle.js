import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { ticketBooking } from "../../../store/actions/Counter/bookingActions";

const BusSeatSingle = ({ data, route, setCollapseStatus }) => {
    const classes = useStyles();
    const [confirm, setConfirm] = useState(false);
    const dispatch = useDispatch();
    const [seats, setSeats] = useState([]);
    const { error } = useSelector((state) => state.booking);

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
            ];

            for (let i = 0; i < totalRow; i++) {
                for (let j = 1; j <= 3; j++) {
                    seatItems.push(seatNames[i] + j);
                }
            }
            setSeats(seatItems);
        }
    }, [data?.bus]);

    const [form, setForm] = useState({
        seat_no: [],
        name: "",
        phone: "",
        route_id: route?.id,
        coach_id: data?.id,
        fare: "1500",
        journey_time: data?.time,
    });

    const seatBookHandler = (seatName) => {
        let selectedSeats = [...form.seat_no];

        if (selectedSeats.includes(seatName)) {
            selectedSeats = selectedSeats.filter((item) => item !== seatName);
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
    };
    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        phone: { text: "", show: false },
    });
    useEffect(() => {
        if (error && Object.keys(error).length > 0) {
            Object.keys(error).forEach((key) => {
                setErrors((prevState) => ({
                    ...prevState,
                    [key]: { text: error[key][0], show: true },
                }));
            });
        }
    }, [error]);
    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const bookTicketHandler = (e) => {
        e.preventDefault();
        if (form.seat_no.length === 0) {
            toast.error("Please choose atleast one seat");
        } else if (form.phone === "") {
            setErrors((prevState) => ({
                ...prevState,
                phone: { text: "Phone number not valid", show: true },
            }));
        } else {
            dispatch(
                ticketBooking(form, () => {
                    setCollapseStatus(false);
                })
            );
        }
    };

    const [reservedSeats, setReservedSeats] = useState([]);

    useEffect(() => {
        console.log(data?.ticket_books?.map((item) => item.status));
        if (data?.ticket_books && data?.ticket_books.length > 0) {
            let reservedItems = [];

            data?.ticket_books.forEach((item) => {
                item?.seat_no?.forEach((seatItem) => {
                    reservedItems.push(seatItem);
                });
            });

            setReservedSeats(reservedItems);
        }
    }, [data?.ticket_books]);

    // console.log(reservedSeats);

    const renderClass = (item) => {
        let classNames = classes.seatBtn + " ";

        if (form.seat_no.includes(item)) {
            classNames += classes.selectSeatBtn + " ";
        }

        if (reservedSeats.includes(item)) {
            classNames += classes.bookSeatBtn + " ";
        }

        return classNames;
    };

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
                <Container maxWidth="sm">
                    <Grid container>
                        <Grid item xs={12} lg={6} className={classes.busRoot}>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Button
                                        className={classes.seatBtn}
                                        disabled
                                    >
                                        <Icon icon="whh:wheel" width="31px" />
                                        <Typography variant="body2">
                                            Driver
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={5}
                                justifyContent="space-between"
                            >
                                {seats &&
                                    seats.map((item, i) => (
                                        <Grid item key={i}>
                                            <Button
                                                className={renderClass(item)}
                                                onClick={() =>
                                                    seatBookHandler(item)
                                                }
                                                disabled={reservedSeats.includes(
                                                    item
                                                )}
                                            >
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
                        <Grid item xs={12} lg={6}>
                            <Box pl={6}>
                                <Typography className={classes.fare}>
                                    Fare $1500
                                </Typography>
                                <Box my={4}>
                                    <Typography variant="h5" mb={3}>
                                        Passenger Name
                                    </Typography>
                                    <TextField
                                        className={classes.field}
                                        fullWidth
                                        placeholder="Enter Name"
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                        error={errors.name.show}
                                        helperText={errors.name.text}
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
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                        error={errors.phone.show}
                                        helperText={errors.phone.text}
                                    />
                                </Box>
                                <Box my={4}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        className={classes.confirmBtn}
                                        onClick={bookTicketHandler}
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
        </>
    );
};

export default BusSeatSingle;
