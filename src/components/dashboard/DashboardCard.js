import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styled";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
// import img1 from "../../assets/dash1.png";

const DashboardCard = ({ title, number, src, text, nextIcon }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography mt={2} sx={{ fontSize: "18px" }}>
                    {title}
                </Typography>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    mt={3}
                >
                    <Grid item>
                        <Typography sx={{ fontSize: "24px" }}>
                            {number}
                        </Typography>
                        <Typography
                            sx={{ fontSize: "14px" }}
                            className={classes.text}
                        >
                            {text}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            src={src}
                            alt="company"
                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 0,
                            }}
                        ></Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default DashboardCard;
