import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AdminUrl } from "../../../constants/urls";
import { Delete } from "@mui/icons-material";
import Swal from "sweetalert2";
import { fetchFares } from "../../../store/actions/fareActions";
import FareTable from "../../../components/Admin/Fare/FareTable";

const Fare = () => {
    const history = useHistory();
    const classes = useStyles();
    const { fares } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFares());
    }, [dispatch]);
    return (
        <>
            <Box m={5}>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant="h6">Manage Fares</Typography>
                        <Box
                            mb={3}
                            sx={{
                                width: "42px",
                                height: "4px",
                                backgroundColor: "#33A551",
                            }}
                        ></Box>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={() =>
                                history.push(AdminUrl.manageFare.addFare)
                            }
                        >
                            <Box display="flex">
                                <AddCircleOutlinedIcon />
                                <Typography ml={1} sx={{ color: "black" }}>
                                    Add Fare
                                </Typography>
                            </Box>
                        </Button>
                    </Grid>
                </Grid>

                <Box mt={5}>
                    <FareTable />
                </Box>
            </Box>
        </>
    );
};

export default Fare;
