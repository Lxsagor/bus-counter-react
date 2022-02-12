import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PopularCity from "../PopularCity/PopularCity";
import { useStyles } from "./styled";
import Sylhet from "../../../assets/landing/Sylhet.png";
import Ctg from "../../../assets/landing/ctg.png";
import Saint from "../../../assets/landing/saint.png";

const PopularCities = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md">
                <Box className={classes.serviceroot} mb={5}>
                    <Typography
                        variant="body2"
                        className={classes.serviceTitle}
                        pb={2}
                    >
                        Popular Cities
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item lg={4} xs={6}>
                        <PopularCity src={Sylhet} title={"Sylhet"} />
                    </Grid>
                    <Grid item lg={4} xs={6}>
                        <PopularCity src={Ctg} title={"Chittagong"} />
                    </Grid>
                    <Grid item lg={4} xs={6}>
                        <PopularCity src={Saint} title={"Saint martin"} />
                    </Grid>
                    <Grid item lg={4} xs={6}>
                        <PopularCity src={Sylhet} title={"Sylhet"} />
                    </Grid>
                    <Grid item lg={4} xs={6}>
                        <PopularCity src={Ctg} title={"Chittagong"} />
                    </Grid>
                    <Grid item lg={4} xs={6}>
                        <PopularCity src={Saint} title={"Saint martin"} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default PopularCities;
