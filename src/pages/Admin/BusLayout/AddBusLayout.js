import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { Icon } from "@iconify/react";

const AddBusLayout = () => {
    const [formData, setFormData] = React.useState({
        layout: "",
        total_seat: 0,
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
    });
    const classes = useStyles();
    useEffect(() => {
        if (formData.layout === "1-1") {
            setValue((prevState) => ({
                ...prevState,
                x: 1,
                y: 1,
            }));
        }
        if (formData.layout === "1-2") {
            setValue((prevState) => ({
                ...prevState,
                x: 1,
                y: 2,
            }));
        }
        if (formData.layout === "2-1") {
            setValue((prevState) => ({
                ...prevState,
                x: 2,
                y: 1,
            }));
        }
        if (formData.layout === "2-2") {
            setValue((prevState) => ({
                ...prevState,
                x: 2,
                y: 2,
            }));
        }
        if (formData.layout === "3-2") {
            setValue((prevState) => ({
                ...prevState,
                x: 3,
                y: 2,
            }));
        }
        if (formData.layout === "3-3") {
            setValue((prevState) => ({
                ...prevState,
                x: 3,
                y: 3,
            }));
        }
    }, [formData.layout]);

    console.log("value", value);
    console.log("seat", formData);

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
                            <Grid item lg={2}>
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
                            <Grid item lg={2}>
                                <TextField
                                    label="Total Seat"
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
                    </Box>
                </form>
                {/* <Icon icon="emojione-monotone:seat" width="25px" /> */}
            </Box>
        </>
    );
};

export default AddBusLayout;
