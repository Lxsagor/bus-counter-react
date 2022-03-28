import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";
import AddIcon from "@mui/icons-material/AddCircleRounded";

const Index = () => {
    const history = useHistory();
    return (
        <>
            {" "}
            <Box m={5}>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant="h6">Manage Bus Layout</Typography>
                        <Box
                            mb={3}
                            sx={{
                                width: "42px",
                                height: "4px",
                                backgroundColor: "#33A551",
                            }}
                        ></Box>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={() =>
                                history.push(
                                    AdminUrl.manageBusLayout.addbuslayout
                                )
                            }
                        >
                            <Box display="flex">
                                <AddIcon color="black" />
                                <Typography ml={1} sx={{ color: "black" }}>
                                    Add Bus Layout
                                </Typography>
                            </Box>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Index;
