import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styled";

const NavAuth = () => {
  const classes = useStyles();
  return (
    <>
      <List className={classes.list}>
        <NavLink to="/ds">
          <ListItem>
            <ListItemText primary="SignUp" />
          </ListItem>
        </NavLink>
        <NavLink to="/login">
          <ListItem>
            <ListItemText primary="Login" />
          </ListItem>
        </NavLink>
      </List>
    </>
  );
};

export default NavAuth;
