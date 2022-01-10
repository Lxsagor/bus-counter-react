import React from "react";
import {
    AppBar,
    Avatar,
    Badge,
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    IconButton,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useStyles } from "./styled";
import { deepOrange } from "@mui/material/colors";

import { Menu } from "@mui/icons-material";

const Header = ({ setDrawerOpen, drawerOpen }) => {
    const classes = useStyles();

    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
                <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                    <Menu />
                </IconButton>
            </Grid>
            <Grid item>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemIcon>
                            <Badge color="success" variant="dot">
                                <NotificationsNoneOutlinedIcon fontSize="large" />
                            </Badge>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                        <Typography variant="h6" m={3}>
                            John Doe
                        </Typography>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
};

export default Header;
