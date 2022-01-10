import {
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SubjectIcon from "@mui/icons-material/Subject";
import SettingsIcon from "@mui/icons-material/Settings";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ContactsIcon from "@mui/icons-material/Contacts";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styled";
import { SiteUrl } from "../../constants/urls";

const SideNav = () => {
    const classes = useStyles();
    return (
        <>
            <List className={classes.list}>
                <NavLink to={SiteUrl.dashboard.index}>
                    <ListItem>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={SiteUrl.manageCompany.index}>
                    <ListItem>
                        <ListItemIcon>
                            <ManageAccountsIcon />
                        </ListItemIcon>
                        <ListItemText>Manage</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={SiteUrl.contact.index}>
                    <ListItem>
                        <ListItemIcon>
                            <ContactsIcon />
                        </ListItemIcon>
                        <ListItemText>Contact Details </ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={SiteUrl.logs.index}>
                    <ListItem>
                        <ListItemIcon>
                            <SubjectIcon />
                        </ListItemIcon>

                        <ListItemText>Log </ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={SiteUrl.settings}>
                    <ListItem>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>Setting </ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={SiteUrl.subscription.index}>
                    <ListItem>
                        <ListItemIcon>
                            <SubscriptionsIcon />
                        </ListItemIcon>
                        <ListItemText>Subscription </ListItemText>
                    </ListItem>
                </NavLink>
            </List>
        </>
    );
};

export default SideNav;
