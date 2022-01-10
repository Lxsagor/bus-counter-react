import { Avatar, Typography, Box } from "@mui/material";
import React from "react";
import Add from "../../assets/add.png";

const index = () => {
    return (
        <>
            <Box mb={2} textAlign="center">
                <Avatar src={Add} alt="add" />

                <Typography>User Added</Typography>
            </Box>
        </>
    );
};

export default index;
