import {
    Button,
    Container,
    Grid,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import UserBusSeat from "./UserBusSeat";
import { useStyles } from "./styled";

const BusComp = () => {
    const [collapseStatus, setCollapseStatus] = useState(false);

    const classes = useStyles();
    return (
        <>
            <TableRow>
                <TableCell>
                    <Typography>SR Travels</Typography>

                    <>
                        <Typography>
                            <strong>Route:</strong>
                        </Typography>
                        <Typography>Dhaka-Bogura-Rangpur</Typography>
                        <Typography>Start:Dhaka</Typography>
                        <Typography>Last Destination:</Typography>
                        <Typography>Rangpur</Typography>
                    </>
                </TableCell>
                <TableCell>10:00 PM</TableCell>
                <TableCell>06:00 PM</TableCell>
                <TableCell>40</TableCell>
                <TableCell>
                    ৳800
                    <Box pt={10}>
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.bookTicketBtn}
                            onClick={() => setCollapseStatus(!collapseStatus)}
                        >
                            Book Ticket
                        </Button>
                    </Box>
                </TableCell>
            </TableRow>

            {/* {collapseStatus && <UserBusSeat />} */}
        </>
    );
};

export default BusComp;
