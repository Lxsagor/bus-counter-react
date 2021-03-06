import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import moment from "moment";
import { searchCoachs } from "../../store/actions/User/userActions";

const Buses = () => {
    const classes = useStyles();
    const { coaches, searchCoach } = useSelector((state) => state.ticket);

    const [coachItems, setCoachItems] = useState([]);
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        start_location: queryParams.start_location,
        end_location: queryParams.end_location,
        journey_date: queryParams.journey_date,
        return_date: null,
    });

    useEffect(() => {
        if (form && Object.keys(form).length > 0) {
            dispatch(searchCoachs(form, () => {}));
        }
    }, [dispatch, form, searchCoach]);

    useEffect(() => {
        if (coaches) {
            let items = [];
            coaches.forEach((item) => {
                if (
                    moment(new Date(item.time)).format("DD/MM/YYYY") ===
                    queryParams.journey_date
                ) {
                    items.push(item);
                }
            });

            setCoachItems(items);
        }
    }, [coaches, queryParams.journey_date]);

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
                                    <TableCell>Fare</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {coachItems?.map((item) => (
                                    <BusComp item={item} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <UserBusSeat /> */}
                </Container>
            </Box>
        </>
    );
};

export default Buses;
