import {
    Box,
    Typography,
    Grid,
    Avatar,
    Container,
    Stack,
    List,
    ListItem,
    ListItemText,
    Button,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styled";
import { Icon } from "@iconify/react";
import Logo from "../../../assets/landing/Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footer} py={5}>
            <Container maxWidth="xl">
                <Grid container alignItems="flex-start">
                    <Grid item lg={3} xs={12} md={6}>
                        <Avatar
                            src={Logo}
                            alt="logo"
                            className={classes.avatar}
                        />
                        <Box mb={4}>
                            <Typography variant="body2">
                                Aro9 Adam Street
                            </Typography>
                            <Typography variant="body2">
                                NY 530065, USA
                            </Typography>
                        </Box>
                        <Box mb={4}>
                            <Typography variant="body2">
                                Phone: +8801795929461
                            </Typography>
                            <Typography variant="body2">
                                Email: info@example.com
                            </Typography>
                        </Box>
                        <Box mb={3} className={classes.icon}>
                            <Stack direction="row" spacing={2}>
                                <FacebookIcon />
                                <InstagramIcon />
                                <TwitterIcon />

                                <Icon icon="ant-design:skype-filled" />
                                <LinkedInIcon />
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item lg={3} xs={12} md={6}>
                        <Typography variant="body1" pl={1} mb={2}>
                            Useful Links
                        </Typography>

                        <List className={classes.footerList}>
                            <NavLink to="/s">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="Home" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/dfsd">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="About us" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/ds">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="Services" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/sd">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="Terms of service" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/sd">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="Privacy policy" />
                                </ListItem>
                            </NavLink>
                        </List>
                    </Grid>
                    <Grid item lg={3} xs={12} md={6}>
                        <Typography variant="body1" pl={1} mb={2}>
                            Our Services
                        </Typography>

                        <List className={classes.footerList}>
                            <NavLink to="/s">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="Web Design" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/dfsd">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="Web Development" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/ds">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="Product Management" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/sd">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="Marketing" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/sd">
                                <ListItem>
                                    <NavigateNextIcon color="primary" />
                                    <ListItemText primary="Graphic Design" />
                                </ListItem>
                            </NavLink>
                        </List>
                    </Grid>
                    <Grid item lg={3} xs={12} md={6}>
                        <Typography variant="body1" mb={3}>
                            Our Newsletter
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Typography>
                        <Box className={classes.subfield} mt={3}>
                            <Button
                                className={classes.subBtn}
                                variant="contained"
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Footer;
