import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "#E5E5E5",
        minHeight: "100vh",
        position: "relative",
    },
    sidebar: {
        width: "251px",
        height: "100%",
        backgroundColor: "#FFFFFF",
        // minHeight: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
    },
    content: {
        width: "100%",
        height: "100%",
        paddingLeft: "251px",

        [theme.breakpoints.down("md")]: {
            paddingLeft: 0,
        },
    },

    hideSidebar: {
        display: "none",
    },

    fullContent: {
        paddingLeft: 0,
    },
    drawer: {
        width: "251px",

        overflow: "hidden",
        "& .MuiDrawer-paper": {
            width: "251px",
            // backgroundColor: "#F4F6F9",
            "&::-webkit-scrollbar": {
                display: "none",
            },
        },

        "& .MuiDrawer-paperAnchorDockedLeft": {
            border: 0,
        },
    },
}));
