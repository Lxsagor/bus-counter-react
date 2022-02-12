import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./styled";

const PopularCity = ({ src, title }) => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Avatar src={src} className={classes.avatar} />
                <Typography variant="body2" className={classes.title} my={1}>
                    {title}
                </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    className={classes.button}
                >
                    Buy Ticket
                </Button>
            </Box>
        </>
    );
};

export default PopularCity;
