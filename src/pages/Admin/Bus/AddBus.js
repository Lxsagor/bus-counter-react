import {
    TextField,
    Typography,
    Grid,
    Button,
    Divider,
    TableContainer,
    Table,
    TableBody,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    TableCell,
    TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AdminUrl } from "../../../constants/urls";
import { addBus, fetchBus } from "../../../store/actions/Admin/busAction";
import { BUS_VALIDATE_ERROR, ERROR } from "../../../store/types";
import { useStyles } from "./styled";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const AddBus = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { bus, error } = useSelector((state) => state.bus);
    const { buttonLoading } = useSelector((state) => state.shared);
    const { id } = useParams();

    const [formData, setFormData] = useState({
        bus_no: "",
        bus_reg_no: "",
        chesis_no: "",
        bus_type: "",
        seat_type: "",
        layout: "",
        total_seat: 0,
        seat_no: [],
    });
    const [errors, setErrors] = useState({
        bus_no: { text: "", show: false },
        bus_reg_no: { text: "", show: false },
        chesis_no: { text: "", show: false },
        bus_type: { text: "", show: false },
        total_seat: { text: "", show: false },
    });

    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.bus_no === "") {
            setErrors((prevState) => ({
                ...prevState,
                bus_no: { text: "Bus no not valid", show: true },
            }));
        } else if (formData.bus_reg_no === "") {
            setErrors((prevState) => ({
                ...prevState,
                bus_reg_no: {
                    text: "Bus registration number not valid",
                    show: true,
                },
            }));
        } else if (formData.chesis_no === "") {
            setErrors((prevState) => ({
                ...prevState,
                chesis_no: {
                    text: "Bus chesis number not valid",
                    show: true,
                },
            }));
        } else {
            dispatch(
                addBus(formData, () => history.push(AdminUrl.manageBus.index))
            );
        }
    };

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

    useEffect(() => {
        return () => {
            dispatch({
                type: BUS_VALIDATE_ERROR,
                payload: null,
            });
        };
    }, [dispatch]);
    const [value, setValue] = useState({
        x: 0,
        y: 0,
        row: 0,
    });
    useEffect(() => {
        let totalSeat = formData.total_seat;
        let x = value.x;
        let y = value.y;
        let row = totalSeat / (x + y);
        if (formData.layout === "1-1") {
            setValue((prevState) => ({
                ...prevState,
                x: 1,
                y: 1,
                row: row,
            }));
        }
        if (formData.layout === "1-2") {
            setValue((prevState) => ({
                ...prevState,
                x: 1,
                y: 2,
                row: row,
            }));
        }
        if (formData.layout === "2-1") {
            setValue((prevState) => ({
                ...prevState,
                x: 2,
                y: 1,
                row: row,
            }));
        }
        if (formData.layout === "2-2") {
            setValue((prevState) => ({
                ...prevState,
                x: 2,
                y: 2,
                row: row,
            }));
        }
        if (formData.layout === "3-2") {
            setValue((prevState) => ({
                ...prevState,
                x: 3,
                y: 2,
                row: row,
            }));
        }
        if (formData.layout === "3-3") {
            setValue((prevState) => ({
                ...prevState,
                x: 3,
                y: 3,
                row: row,
            }));
        }
    }, [formData.layout, formData.total_seat, value.x, value.y]);

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
                            <Button className={classes.seatBtn}>
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
                    let modulas = formData.total_seat % seatXY;

                    if (
                        rowPosition + 1 === parseInt(value.row) &&
                        modulas > 0
                    ) {
                        seats.push(
                            <TableCell className={classes.actionCell}>
                                <Button className={classes.seatBtn}>
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
                            <Button className={classes.seatBtn}>
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
            classes.seatBtn,
            formData.total_seat,
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
        console.log("seats", seatNumbers);
        console.log("rows", seatRows);

        // setFormData((prevState) => ({
        //     ...prevState,
        //     seat_no: seatNumbers,
        // }));
        return {
            seatRows,
            seatNumbers,
        };
    }, [seatColumn, value.row]);

    useEffect(() => {
        setFormData((prevState) => ({
            ...prevState,
            seat_no: seatLayout().seatNumbers,
        }));
    }, [seatLayout]);

    console.log(formData);
    useEffect(() => {
        if (id) {
            dispatch(fetchBus(id));
        }
    }, [dispatch, id]);
    console.log("id", id);
    console.log("bus", bus);
    // useEffect(() => {
    //     if (bus && Object.keys(bus).length > 0) {
    //         let data = {
    //             ...bus,
    //             bus_no: bus.bus_no,
    //             bus_reg_no: bus.bus_reg_no,
    //             chesis_no: bus.chesis_no,
    //             bus_type: bus.bus_type,
    //             seat_type: bus.seat_type,
    //             layout: bus.layout,
    //             total_seat: bus.total_seat,
    //         };
    //         // if (bus.hasOwnProperty("seat_no")) {
    //         //     data["seat_no"] = bus.seat_no;
    //         // }

    //         setFormData((prevState) => ({
    //             ...prevState,
    //             ...data,
    //         }));
    //         console.log("data", data);
    //     }
    // }, [bus]);
    // console.log("form", formData);

    return (
        <>
            <Box m={5}>
                <Typography variant="h6">
                    {" "}
                    {formData.hasOwnProperty("id") ? "Update Bus" : "Add Bus"}
                </Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <form onSubmit={submitHandler}>
                    <Box my={3}>
                        <Grid
                            container
                            spacing={5}
                            justifyContent="space-between"
                        >
                            <Grid item lg={6}>
                                <Grid container spacing={6}>
                                    <Grid item lg={6} xs={12}>
                                        <Typography mb={2}>Bus No</Typography>
                                        <TextField
                                            fullWidth
                                            className={classes.field}
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "bus_no",
                                                    e.target.value
                                                )
                                            }
                                            value={formData.bus_no}
                                            error={errors.bus_no.show}
                                            helperText={errors.bus_no.text}
                                        />
                                    </Grid>
                                    <Grid item lg={6} xs={12}>
                                        <Typography mb={2}>
                                            Bus Registration No
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            className={classes.field}
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "bus_reg_no",
                                                    e.target.value
                                                )
                                            }
                                            value={formData.bus_reg_no}
                                            error={errors.bus_reg_no.show}
                                            helperText={errors.bus_reg_no.text}
                                        />
                                    </Grid>
                                    <Grid item lg={6} xs={12}>
                                        <Typography mb={2}>
                                            Chesis No
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            className={classes.field}
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "chesis_no",
                                                    e.target.value
                                                )
                                            }
                                            value={formData.chesis_no}
                                            error={errors.chesis_no.show}
                                            helperText={errors.chesis_no.text}
                                        />
                                    </Grid>{" "}
                                    <Grid item lg={6} xs={12}>
                                        <Typography mb={2}>Bus Type</Typography>
                                        <TextField
                                            fullWidth
                                            className={classes.field}
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "bus_type",
                                                    e.target.value
                                                )
                                            }
                                            value={formData.bus_type}
                                            error={errors.bus_type.show}
                                            helperText={errors.bus_type.text}
                                        />
                                    </Grid>
                                    <Grid item lg={6}>
                                        <Typography mb={3}>
                                            Seat Type
                                        </Typography>
                                        <TextField
                                            label="Seat Type"
                                            className={classes.field}
                                            value={formData.seat_type}
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "seat_type",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid item lg={6}>
                                        <Typography mb={3}>Layout</Typography>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                                Layout
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={formData.layout}
                                                label="Layout"
                                                onChange={(e) =>
                                                    fieldChangeHandler(
                                                        "layout",
                                                        e.target.value
                                                    )
                                                }
                                                className={classes.field}
                                            >
                                                <MenuItem value={"1-1"}>
                                                    1-1
                                                </MenuItem>
                                                <MenuItem value={"1-2"}>
                                                    1-2
                                                </MenuItem>
                                                <MenuItem value={"2-1"}>
                                                    2-1
                                                </MenuItem>
                                                <MenuItem value={"2-2"}>
                                                    2-2
                                                </MenuItem>
                                                <MenuItem value={"3-2"}>
                                                    3-2
                                                </MenuItem>
                                                <MenuItem value={"3-3"}>
                                                    3-3
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item lg={6}>
                                        <Typography mb={3}>
                                            Total seat{" "}
                                        </Typography>

                                        <TextField
                                            type="number"
                                            className={classes.field}
                                            value={formData.total_seat}
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "total_seat",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={3}>
                                        <Box mt={7}>
                                            <Button
                                                fullWidth
                                                size="large"
                                                variant="contained"
                                                className={classes.button}
                                                type="submit"
                                                {...(buttonLoading && {
                                                    disabled: true,
                                                    startIcon: (
                                                        <BeatLoader
                                                            color="white"
                                                            loading={true}
                                                            size={10}
                                                        />
                                                    ),
                                                })}
                                            >
                                                {formData.hasOwnProperty("id")
                                                    ? "Update Bus"
                                                    : "Add Bus"}
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={6}>
                                <TableContainer sx={{ width: 610 }}>
                                    <Table>
                                        <TableBody>
                                            {seatLayout().seatRows}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </>
    );
};

export default AddBus;
