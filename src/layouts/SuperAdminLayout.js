import { Menu } from "@mui/icons-material";
import {
    Avatar,
    Container,
    Hidden,
    IconButton,
    SwipeableDrawer,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Xcounter from "../assets/Xcounter.png";
import Header from "../components/Header/SuperAdminHeader";
import SideNav from "../components/SideNav/SuperAdminSideNav";
import { useStyles } from "./styled";

const SuperAdminLayout = ({ children }) => {
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
                                <NavLink to="/superadmin/dashboard">
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
                                <SideNav />
                            </Box>
                        </Box>

                        {/* <Box py={3} pl={3}>
                        <NavLink to="/dashboard">
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
                        <Box mt={5}>
                            <SideNav />
                        </Box>
                    </Box> */}
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
                            <NavLink to="/superadmin/dashboard">
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
                            <SideNav />
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
                        <Header
                            setDrawerOpen={setDrawerOpen}
                            drawerOpen={drawerOpen}
                        />
                        {children}
                        {/* {console.log(children)} */}
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default SuperAdminLayout;
