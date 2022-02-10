import { Avatar, Typography, Box } from "@mui/material";
import React from "react";
import Add from "../../assets/add.png";
import { useStyles } from "./styled";

const Dialog = () => {
    const classes = useStyles();
    return (
        <>
            <Box mb={2} className={classes.root}>
                <Avatar src={Add} alt="add" className={classes.avatar} />
                <Typography variant="body2" className={classes.text}>
                    User Added Successfully
                </Typography>
            </Box>
        </>
    );
};

export default Dialog;
