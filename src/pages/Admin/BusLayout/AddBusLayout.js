import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styled";
import { Icon } from "@iconify/react";

const AddBusLayout = () => {
    const [formData, setFormData] = React.useState({
        type: "",
        layout: "",
        total_seat: 0,
        seat_no: [],
    });
    const fieldChangeHandler = (field, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const [value, setValue] = useState({
        x: 0,
        y: 0,
        row: 0,
    });
    const classes = useStyles();
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

    const seatLayout = () => {
        let seatRows = [];
        let seatNumbers = [];

        for (let i = 1; i <= value.row; i++) {
            seatRows.push(
                <TableRow>{seatColumn(i - 1, seatNumbers)}</TableRow>
            );
            // setFormData((prevState) => ({
            //     ...prevState,
            //     seat_no: seatNumbers,
            // }));
        }
        console.log("seats", seatNumbers);
        console.log("rows", seatRows);
        return seatRows;
    };

    const seatColumn = (rowPosition, seatNumbers) => {
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
                            <Icon icon="emojione-monotone:seat" width="25px" />
                        </Button>
                    </TableCell>
                );
                seatNumbers.push(seatNames[rowPosition] + j);
            } else if (j === x + 1) {
                let seatXY = x + y;
                let modulas = formData.total_seat % seatXY;

                if (rowPosition + 1 === parseInt(value.row) && modulas > 0) {
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
                        <TableCell className={classes.actionCell}></TableCell>
                    );
                }
            } else {
                seats.push(
                    <TableCell className={classes.actionCell}>
                        <Button className={classes.seatBtn}>
                            <Typography>
                                {seatNames[rowPosition] + (j - 1)}
                            </Typography>
                            <Icon icon="emojione-monotone:seat" width="25px" />
                        </Button>
                    </TableCell>
                );
                seatNumbers.push(seatNames[rowPosition] + (j - 1));
            }
        }

        return seats;
    };
    console.log("form", formData);
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Add Bus Layout</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <form>
                    <Box my={3}>
                        <Grid container spacing={5}>
                            <Grid item lg={3}>
                                <Typography mb={3}>Seat Type</Typography>
                                <TextField
                                    label="Seat Type"
                                    className={classes.field}
                                    value={formData.type}
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "type",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item lg={3}>
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
                                        <MenuItem value={"1-1"}>1-1</MenuItem>
                                        <MenuItem value={"1-2"}>1-2</MenuItem>
                                        <MenuItem value={"2-1"}>2-1</MenuItem>
                                        <MenuItem value={"2-2"}>2-2</MenuItem>
                                        <MenuItem value={"3-2"}>3-2</MenuItem>
                                        <MenuItem value={"3-3"}>3-3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={3}>
                                <Typography mb={3}>Total seat </Typography>

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
                        <Grid container spacing={5} mt={1}>
                            <Grid item lg={6}>
                                <Typography mb={3}>Seat No</Typography>
                                <TextField
                                    label="Seat No"
                                    multiline
                                    fullWidth
                                    rows={10}
                                    value={formData.seat_no}
                                    // onChange={(e) =>
                                    //     fieldChangeHandler(
                                    //         "seat_no",
                                    //         e.target.value
                                    //     )
                                    // }
                                    className={classes.field}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item lg={6}>
                                {/* <Typography mb={3}>Seat pattern</Typography> */}
                                <TableContainer sx={{ width: 610 }}>
                                    <Table>
                                        <TableBody>{seatLayout()}</TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Box>
                </form>

                {/* <Icon icon="emojione-monotone:seat" width="25px" /> */}
            </Box>
        </>
    );
};

export default AddBusLayout;
