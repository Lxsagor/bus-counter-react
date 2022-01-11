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
import AdminHeader from "../components/Header/AdminHeader";
import AdminSideNav from "../components/SideNav/AdminSideNav";
import { useStyles } from "./styled";

const AdminLayout = ({ children }) => {
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
                                <NavLink to="/admin/dashboard">
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
                                <AdminSideNav />
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
                            <NavLink to="/admin/dashboard">
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
                            <AdminSideNav />
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
                        <AdminHeader
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

export default AdminLayout;
