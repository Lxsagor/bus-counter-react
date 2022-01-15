import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import ServiceCard from "../../ServiceCard/ServiceCard";
import { useStyles } from "./styled";
import { Icon } from "@iconify/react";

const Service = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md">
                <Box className={classes.serviceroot} mb={5}>
                    <Typography
                        variant="body2"
                        className={classes.serviceTitle}
                        pb={2}
                    >
                        Why are we best
                    </Typography>
                    {/* <Box
                        mb={3}
                        mt={1}
                        sx={{
                            width: "114px",
                            height: "4px",
                            backgroundColor: "#33A551",
                        }}
                    ></Box> */}
                </Box>
                <Grid container spacing={2}>
                    <Grid item lg={4} xs={12}>
                        <ServiceCard
                            icon={
                                <Icon
                                    icon="mdi:bus-clock"
                                    width="50"
                                    height="50"
                                />
                            }
                            title={"On time departure"}
                            desc={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies interdum netus Ridiculus turpis vehicula phasellus pretium augue suscipit aenean vitae. "
                            }
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServiceCard
                            icon={
                                <Icon
                                    icon="ri:secure-payment-line"
                                    width="50"
                                    height="50"
                                />
                            }
                            title={"Easy & safe payment"}
                            desc={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies interdum netus Ridiculus turpis vehicula phasellus pretium augue suscipit aenean vitae. "
                            }
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServiceCard
                            icon={
                                <Icon
                                    icon="icomoon-free:ticket"
                                    width="50"
                                    height="50"
                                />
                            }
                            title={"Return ticket Service"}
                            desc={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies interdum netus Ridiculus turpis vehicula phasellus pretium augue suscipit aenean vitae. "
                            }
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Service;
