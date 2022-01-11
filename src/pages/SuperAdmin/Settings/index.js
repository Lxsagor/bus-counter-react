import { Box, Typography } from "@mui/material";
import React from "react";

const Settings = () => {
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Settings</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
            </Box>
        </>
    );
};

export default Settings;
