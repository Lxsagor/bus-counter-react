import DashboardIcon from "@mui/icons-material/Dashboard";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { CounterUrl } from "../../constants/urls";
import { useStyles } from "./styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import HistoryIcon from "@mui/icons-material/History";
const CounterSideNav = () => {
    const classes = useStyles();
    return (
        <>
            <List className={classes.list}>
                <NavLink to={CounterUrl.dashboard.index}>
                    <ListItem>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={CounterUrl.accounts.index}>
                    <ListItem>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Accounts</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={CounterUrl.history.index}>
                    <ListItem>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText>History</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={CounterUrl.counters.index}>
                    <ListItem>
                        <ListItemIcon>
                            <DirectionsBusIcon />
                        </ListItemIcon>
                        <ListItemText>Counters</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={CounterUrl.trackbus.index}>
                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText>Track Bus</ListItemText>
                    </ListItem>
                </NavLink>
            </List>
        </>
    );
};

export default CounterSideNav;
