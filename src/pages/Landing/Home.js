import { Box, Container } from "@mui/material";
import React from "react";
import Hero from "../../components/Landing//Home/Hero";
import About from "../../components/Landing/Home/About";
import PaymentAccept from "../../components/Landing/Home/PaymentAccept";
import PopularCities from "../../components/Landing/Home/PopularCities";
import Reviews from "../../components/Landing/Home/Reviews";
import Service from "../../components/Landing/Home/Service";
import { useStyles } from "./styled";

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.wrapper}>
                <Box className={classes.hero}>
                    <Container maxWidth="xl">
                        <Hero />
                    </Container>
                </Box>

                <Box my={6}>
                    <Service />
                </Box>
                <Box my={6}>
                    <PopularCities />
                </Box>
                <Box my={6}>
                    <About />
                </Box>
                <Box my={6}>
                    <Reviews />
                </Box>
                <Box my={6}>
                    <PaymentAccept />
                </Box>
            </Box>
        </>
    );
};

export default Home;
