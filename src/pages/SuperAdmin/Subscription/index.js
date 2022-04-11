import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import SubsTable from "../../../components/SuperAdmin/Subscription/SubsTable";

const Subscription = () => {
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Subscription</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select> */}
                <Box my={3}>
                    <SubsTable />
                </Box>
            </Box>
        </>
    );
};

export default Subscription;
