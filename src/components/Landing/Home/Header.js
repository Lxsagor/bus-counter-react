import {
    AppBar,
    Toolbar,
    Grid,
    Button,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Hidden,
    IconButton,
    SwipeableDrawer,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styled";
import Logo from "../../../assets/landing/Logo.png";
import { NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import Navbar from "./Navbar";
import NavAuth from "./NavAuth";

const Header = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const drawerHandler = (state) => {
        setDrawerOpen(state);
    };
    return (
        <>
            <AppBar elevation={0} color="default" position="sticky">
                <Toolbar className={classes.toolbar}>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item xs={10} sm={2} lg={2}>
                            <Button variant="text">
                                <Avatar
                                    src={Logo}
                                    style={{
                                        width: "80%",
                                        height: "80%",
                                        borderRadius: 0,
                                    }}
                                />
                            </Button>
                        </Grid>

                        <Grid item xs={2} sm={8} lg={8}>
                            <Hidden smUp>
                                <IconButton onClick={() => drawerHandler(true)}>
                                    <Menu color="primary" />
                                </IconButton>
                            </Hidden>

                            <Hidden smDown>
                                <Navbar />
                            </Hidden>

                            <SwipeableDrawer
                                anchor="right"
                                open={drawerOpen}
                                onClose={() => drawerHandler(false)}
                                onOpen={() => drawerHandler(true)}
                            >
                                <Navbar />
                                <NavAuth />
                            </SwipeableDrawer>
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={0} sm={2} lg={2}>
                                <NavAuth />
                            </Grid>
                        </Hidden>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
