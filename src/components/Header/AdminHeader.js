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
    Popover,
    Box,
    Divider,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useStyles } from "./styled";
import { deepOrange } from "@mui/material/colors";

import { Menu } from "@mui/icons-material";
import { useSelector } from "react-redux";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useDispatch } from "react-redux";
import { LandingUrl } from "../../constants/urls";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/actions/Auth/authActions";

const AdminHeader = ({ setDrawerOpen, drawerOpen }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector((state) => state.auth);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const logoutHandler = () => {
        dispatch(logout(() => history.push(LandingUrl.auth.login)));
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
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
                        <Box className={classes.headerOptionContainer}>
                            <Box
                                className={classes.avatarContainer}
                                onClick={handleClick}
                            >
                                <Avatar />
                                <Box>
                                    <Typography
                                        className={classes.name}
                                        variant="body1"
                                    >
                                        {currentUser
                                            ? currentUser.name
                                            : "Admin"}
                                    </Typography>
                                </Box>
                                <Box className={classes.iconContent}>
                                    <ArrowDropDownOutlinedIcon />
                                </Box>
                            </Box>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center",
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "center",
                                }}
                            >
                                <Box className={classes.popOver}>
                                    <Typography p={2}>Edit Profile</Typography>
                                    <Divider />
                                    <Typography
                                        p={2}
                                        className={classes.typography}
                                        onClick={logoutHandler}
                                    >
                                        Logout
                                    </Typography>
                                </Box>
                            </Popover>
                        </Box>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
};

export default AdminHeader;
