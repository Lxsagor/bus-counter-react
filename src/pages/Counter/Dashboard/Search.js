import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Bus from "../../../components/Counter/BusComponent/Bus";
import BusTicket from "../../../components/Counter/BusComponent/BusTicket";
import TicketItem from "../../../components/Counter/BusComponent/TicketItem";
import SearchBox from "../../../components/SearchBox";
import { searhTicket } from "../../../store/actions/Counter/bookingActions";
import { useStyles } from "./styled";

const Search = () => {
    const [form, setForm] = useState({
        pnr: "",
    });
    const dispatch = useDispatch();
    const classes = useStyles();
    const { ticket } = useSelector((state) => state.booking);
    const fieldChangeHandler = (field, value) => {
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (form.pnr === "") {
            toast.error("Please give a pnr number");
        } else {
            dispatch(searhTicket(form, () => {}));
        }
    };
    console.log(form);
    return (
        <>
            <Box m={5}>
                <Box mb={5}>
                    <Typography variant="h6">Search Ticket</Typography>
                    <Box
                        mb={3}
                        sx={{
                            width: "42px",
                            height: "4px",
                            backgroundColor: "#33A551",
                        }}
                    ></Box>
                </Box>
                <Grid container>
                    <Grid item lg={5}>
                        <Typography variant="h6" mb={3} mt={3}>
                            Enter PNR Number
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item lg={8}>
                                <TextField
                                    fullWidth
                                    label="Search"
                                    className={classes.field}
                                    value={form.pnr}
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "pnr",
                                            e.target.value
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item lg={4}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={classes.searchBtn}
                                    size="large"
                                    onClick={submitHandler}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {ticket && Object.keys(ticket).length > 0 && ticket.PNR ? (
                    <Box>
                        <Typography mt={5} variant="h5">
                            Showing Result
                        </Typography>
                        <Box mt={5} mb={5} className={classes.searchRoot}>
                            <TicketItem />
                        </Box>
                    </Box>
                ) : (
                    <Box>
                        <Typography mt={5} variant="h5">
                            No Ticket Found
                        </Typography>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default Search;
