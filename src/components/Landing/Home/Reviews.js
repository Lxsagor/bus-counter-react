import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OwlCarouselcomp from "../../OwlCarousel/OwlCarousel";
import { useStyles } from "./styled";

const Reviews = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.serviceroot} mb={5}>
                <Typography
                    variant="body2"
                    className={classes.serviceTitle}
                    pb={2}
                >
                    Reviews
                </Typography>
            </Box>
            <OwlCarouselcomp />
        </>
    );
};

export default Reviews;
