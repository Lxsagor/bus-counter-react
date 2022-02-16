import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styled";
import { AdminUrl } from "../../../constants/urls";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import TrackTable from "../../../components/Admin/Track/TrackTable";

const Track = () => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant="h6">Manage Track</Typography>
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
                                history.push(AdminUrl.manageTrack.addTrack)
                            }
                        >
                            <Box display="flex">
                                <AddCircleOutlinedIcon />
                                <Typography ml={1} sx={{ color: "black" }}>
                                    Add Track
                                </Typography>
                            </Box>
                        </Button>
                    </Grid>
                </Grid>

                <Box mt={5}>
                    <TrackTable />
                </Box>
            </Box>
        </>
    );
};

export default Track;
