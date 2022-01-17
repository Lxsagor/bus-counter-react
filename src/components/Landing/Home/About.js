import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styled";

const About = () => {
    const classes = useStyles();
    return (
        <Box className={classes.aboutRoot}>
            <Box className={classes.aboutoverlay}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={9} xs={12}>
                            <Typography
                                variant="body2"
                                className={classes.aboutTitle}
                            >
                                About Us
                            </Typography>

                            <Typography
                                variant="body2"
                                className={classes.aboutDesc}
                                mt={3}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas tincidunt egestas
                                malesuada vivamus odio neque. Porttitor
                                ullamcorper et iaculis scelerisque. Velit magna
                                morbi proin faucibus amet, netus euismod. Mi
                                pharetra dictum varius libero donec tristique.
                                Eu aenean ac ornare gravida commodo. Vestibulum
                                et tortor suspendisse imperdiet pellentesque
                                nisi. Malesuada elementum bibendum odio nulla.
                                Risus tempus, quis eget non id mattis. Aliquet
                                id tincidunt leo semper maecenas neque at. In
                                tortor dis sit massa. Bibendum enim sollicitudin
                                pellentesque neque. Mauris posuere eu mauris
                                porttitor sed magna risus eget. Molestie turpis
                                iaculis amet tortor scelerisque quis. Neque
                                tincidunt tortor nec sed eleifend justo cursus.
                                Non eget dictum laoreet mattis eget. Ultricies
                                sed condimentum dignissim diam. Diam euismod ut
                                eu egestas gravida non viverra. Molestie
                                tristique aliquam mi massa a nunc vitae et
                                fermentum. Magna tincidunt quam tempus nullam
                                nisi et. Netus ultrices odio tristique mi cursus
                                sed duis. Eros cum sed fames arcu, ac praesent
                                lectus lacus eget. A, commodo leo diam est at.
                                Sed pellentesque enim, tristique aliquam et.
                                Semper sed mi eu elit mauris quis amet. Quam
                                aenean lectus pulvinar sapien ac id commodo.
                                Rhoncus amet, sed sit adipiscing. Ac luctus
                                dolor turpis pellentesque adipiscing tristique
                                neque, purus. Accumsan vehicula consectetur erat
                                est augue viverra pellentesque et. Facilisis
                                pulvinar purus, ullamcorper ut sollicitudin
                                scelerisque proin. Interdum orci urna, viverra
                                ac aliquet. Iaculis vivamus feugiat tellus in
                                ultricies feugiat. Dignissim et consectetur amet
                                non tempor dolor diam mauris. Pretium elementum
                                neque, diam sagittis placerat. Justo, amet at
                                porttitor gravida tincidunt pulvinar.
                            </Typography>
                            <Box mt={3}>
                                <Link
                                    href="#"
                                    variant="body2"
                                    className={classes.aboutLink}
                                >
                                    {"Read More"}
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default About;
