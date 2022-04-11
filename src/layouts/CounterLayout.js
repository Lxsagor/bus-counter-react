import { Avatar, Container, Hidden, SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Xcounter from "../assets/Xcounter.png";
import AdminHeader from "../components/Header/AdminHeader";
import CounterHeader from "../components/Header/CounterHeader";
import CounterSideNav from "../components/SideNav/CounterSideNav";
import { useStyles } from "./styled";

const CounterLayout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    const drawerHandler = (state) => {
        setDrawerOpen(state);
    };
    const classes = useStyles();

    return (
        <>
            <Box className={classes.wrapper}>
                <Hidden mdDown>
                    <Box
                        className={`${
                            !drawerOpen ? classes.hideSidebar : classes.sidebar
                        }`}
                    >
                        <Box textAlign="center">
                            <Box py={3} pl={3}>
                                <NavLink to="/counter/dashboard">
                                    <Avatar
                                        alt="X Counter"
                                        src={Xcounter}
                                        variant="square"
                                        style={{
                                            width: "80%",
                                            height: "80%",
                                            borderRadius: 0,
                                        }}
                                    />
                                </NavLink>
                            </Box>
                            <Box pl={3}>
                                {/* <AdminSideNav /> */}
                                <CounterSideNav />
                            </Box>
                        </Box>
                    </Box>
                </Hidden>

                <Hidden lgUp>
                    <SwipeableDrawer
                        className={classes.drawer}
                        anchor="left"
                        open={drawerOpen}
                        onClose={() => drawerHandler(false)}
                        onOpen={() => drawerHandler(true)}
                    >
                        <Box py={3} pl={3}>
                            <NavLink to="/counter/dashboard">
                                <Avatar
                                    alt="X Counter"
                                    src={Xcounter}
                                    variant="square"
                                    style={{
                                        width: "80%",
                                        height: "80%",
                                        borderRadius: 0,
                                    }}
                                />
                            </NavLink>
                        </Box>
                        <Box pl={3}>
                            <CounterSideNav />
                        </Box>
                    </SwipeableDrawer>
                </Hidden>

                <Box
                    className={`${
                        drawerOpen ? classes.content : classes.fullContent
                    }`}
                    pb={5}
                >
                    <Container maxWidth="xl">
                        <CounterHeader
                            setDrawerOpen={setDrawerOpen}
                            drawerOpen={drawerOpen}
                        />
                        {children}
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default CounterLayout;
