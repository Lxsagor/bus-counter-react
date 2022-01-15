import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styled";

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <List className={classes.list}>
                <NavLink to="/">
                    <ListItem>
                        <ListItemText primary="Home" />
                    </ListItem>
                </NavLink>
                <NavLink to="/a">
                    <ListItem>
                        <ListItemText primary="Reservations" />
                    </ListItem>
                </NavLink>
                <NavLink to="/c">
                    <ListItem>
                        <ListItemText primary="About Us" />
                    </ListItem>
                </NavLink>
                <NavLink to="/d">
                    <ListItem>
                        <ListItemText primary="Contact us" />
                    </ListItem>
                </NavLink>
            </List>
        </>
    );
};

export default Navbar;
