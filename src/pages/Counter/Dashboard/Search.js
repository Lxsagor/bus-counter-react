import { Box, Typography } from "@mui/material";
import React from "react";
import Bus from "../../../components/BusComponent/Bus";
import BusTicket from "../../../components/BusComponent/BusTicket";
import TicketItem from "../../../components/BusComponent/TicketItem";
import SearchBox from "../../../components/SearchBox";
import { useStyles } from "./styled";

const Search = () => {
    const classes = useStyles();
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
                <Typography variant="h6" mb={3} mt={3}>
                    Enter PNR Number
                </Typography>
                <SearchBox />
                <Typography mt={5} variant="h5">
                    Showing Result
                </Typography>
                <Box mt={5} mb={5} className={classes.searchRoot}>
                    {/* <Bus />
                    <BusTicket /> */}
                    <TicketItem />
                </Box>
            </Box>
        </>
    );
};

export default Search;
