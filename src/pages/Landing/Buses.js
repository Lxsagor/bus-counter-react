import React from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useStyles } from "./styled";
import { Icon } from "@iconify/react";
import BusComp from "../../components/Landing/Buses/BusComp";
import UserBusSeat from "../../components/Landing/Buses/UserBusSeat";
import RouteTitle from "../../components/Landing/Buses/RouteTitle";

const Buses = () => {
    const classes = useStyles();
    return (
        <>
            <RouteTitle />
            <Box py={3}>
                <Container maxWidth="lg">
                    <TableContainer>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Operator</TableCell>
                                    <TableCell>Deprature Time</TableCell>
                                    <TableCell>Arrival Time</TableCell>
                                    <TableCell>Seat Available</TableCell>
                                    <TableCell>Rent</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <BusComp />
                                <BusComp />
                                <BusComp />
                                <BusComp />
                                <BusComp />
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <UserBusSeat />
                </Container>
            </Box>
        </>
    );
};

export default Buses;
