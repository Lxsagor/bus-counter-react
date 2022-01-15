import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PaymentCard from "../../PaymentCard/PaymentCard";
import { useStyles } from "./styled";

const PaymentAccept = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.serviceroot} mb={5}>
                <Typography
                    variant="body2"
                    className={classes.serviceTitle}
                    pb={2}
                >
                    Payment We Accept
                </Typography>
            </Box>
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>{" "}
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                    <Grid item lg={2}>
                        <PaymentCard />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default PaymentAccept;
