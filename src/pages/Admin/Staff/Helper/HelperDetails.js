import { Avatar, Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { useStyles } from "../styled";

const HelperDetails = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Staff Details</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box my={5}>
                    <Box my={5}>
                        <Avatar />
                    </Box>
                    <Grid container spacing={5}>
                        <Grid item lg={2}>
                            <Typography>Staff's Name :</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography className={classes.driverDText}>
                                John Doe
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box my={3}>
                        <Grid container spacing={5}>
                            <Grid item lg={2}>
                                <Typography>Address :</Typography>
                            </Grid>
                            <Grid item lg={6}>
                                <Typography className={classes.driverDText}>
                                    Road : 05 , KDC Road , Rangpur ,Bangladesh
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box my={3}>
                        <Grid container spacing={5}>
                            <Grid item lg={2}>
                                <Typography>Phone :</Typography>
                            </Grid>
                            <Grid item lg={6}>
                                <Typography className={classes.driverDText}>
                                    01564891236156
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box my={3}>
                        <Typography className={classes.driverDText}>
                            Praesent felis velit, sodales et felis a, rhoncus
                            ornare arcu. Donec nec nunc pretium, elementum augue
                            a, ultricies quam. Cras vel augue semper, semper leo
                            in, semper risus. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos. Praesent odio nunc, facilisis et pharetra
                            ut, commodo vel justo. Duis malesuada mi et arcu
                            blandit placerat. Nunc et mauris tortor. Donec
                            malesuada dui vehicula ultricies facilisis. Aliquam
                            consequat dapibus porttitor. Phasellus suscipit nisi
                            semper, lacinia arcu eu, convallis ligula. Vivamus
                            dapibus laoreet diam, quis feugiat erat posuere vel.
                            Donec non tortor sed mauris ornare accumsan id sed
                            tortor. Vivamus ultricies dui ac dolor maximus
                            sagittis. Integer fringilla pretium ipsum vitae
                            laoreet.
                        </Typography>
                    </Box>
                </Box>
                <Grid container>
                    <Grid item lg={2}>
                        <Button
                            variant="contained"
                            className={classes.editDBtn}
                        >
                            Edit Information
                        </Button>
                    </Grid>
                    <Grid item lg={2}>
                        <Button
                            variant="contained"
                            className={classes.deleteDBtn}
                        >
                            Edit Staff
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default HelperDetails;
