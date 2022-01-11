import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { AdminUrl } from "../../constants/urls";
import { useStyles } from "./styled";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HistoryIcon from "@mui/icons-material/History";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
const AdminSideNav = () => {
    const classes = useStyles();
    return (
        <>
            <List className={classes.list}>
                <NavLink to={AdminUrl.dashboard.index}>
                    <ListItem>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={AdminUrl.manageCounter.index}>
                    <ListItem>
                        <ListItemIcon>
                            <ManageAccountsIcon />
                        </ListItemIcon>
                        <ListItemText>Manage Counter</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={AdminUrl.manageBus.index}>
                    <ListItem>
                        <ListItemIcon>
                            <DirectionsBusIcon />
                        </ListItemIcon>
                        <ListItemText>Manage Bus</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={AdminUrl.manageSchedule.index}>
                    <ListItem>
                        <ListItemIcon>
                            <EventNoteIcon />
                        </ListItemIcon>
                        <ListItemText>Manage Schedule</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={AdminUrl.trackBus.index}>
                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText>Track Bus</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={AdminUrl.accountHistory.index}>
                    <ListItem>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText>Account History</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={AdminUrl.customize.index}>
                    <ListItem>
                        <ListItemIcon>
                            <DashboardCustomizeIcon />
                        </ListItemIcon>
                        <ListItemText>Customize</ListItemText>
                    </ListItem>
                </NavLink>
            </List>
        </>
    );
};

export default AdminSideNav;
