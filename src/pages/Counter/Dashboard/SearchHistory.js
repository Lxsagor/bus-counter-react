import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bus from "../../../components/Counter/BusComponent/Bus";
import { searchRoute } from "../../../store/actions/Counter/bookingActions";
import { useStyles } from "./styled";

const SearchHistory = () => {
    const classes = useStyles();
    const { routes, searchHistory } = useSelector((state) => state.booking);
    const [coachItems, setCoachItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let search = JSON.parse(localStorage.getItem("searchRoute")) || null;
        if (search) {
            dispatch(searchRoute(search));
        }
    }, [dispatch]);
    useEffect(() => {
        if (routes) {
            let items = [];
            routes?.forEach((item) =>
                item.assignBuses?.forEach((tick) => {
                    if (
                        moment(new Date(tick.departure_time)).format(
                            "DD/MM/YYYY"
                        ) ===
                        moment(new Date(searchHistory.journey_date)).format(
                            "DD/MM/YYYY"
                        )
                    ) {
                        items.push(tick);
                    }
                })
            );
            setCoachItems(items);
        }
    }, [routes, routes?.assignBuses, searchHistory.journey_date]);

    return (
        <>
            {routes.length > 0 ? (
                <Box mt={5} mb={3}>
                    <Typography variant="h6">Available Bus List</Typography>
                    <Box
                        sx={{
                            width: "42px",
                            height: "4px",
                            backgroundColor: "#33A551",
                        }}
                    ></Box>
                </Box>
            ) : (
                <Box mt={5} mb={3}>
                    <Typography variant="h6">No bus found</Typography>
                </Box>
            )}

            <Grid container>
                <Grid item lg={12} xl={10}>
                    <Box className={classes.root}>
                        {routes?.map((item, i) => (
                            <>
                                {!coachItems.length > 0 && (
                                    <Box mb={3} className={classes.bus} key={i}>
                                        {/* <Typography variant="h6">
                                                Routes
                                            </Typography> */}
                                        <Bus item={item} />
                                    </Box>
                                )}
                                {item.assignBuses.length > 0 && (
                                    <>
                                        {/* <Typography variant="h6" pl={3}>
                                                Coaches
                                            </Typography> */}
                                        {coachItems?.map((busItem, j) => (
                                            <Box
                                                mb={3}
                                                className={classes.bus}
                                                key={j}
                                            >
                                                <Bus
                                                    item={item}
                                                    bus={busItem}
                                                />
                                            </Box>
                                        ))}
                                    </>
                                )}
                            </>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SearchHistory;
