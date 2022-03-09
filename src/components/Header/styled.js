import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    list: {
        display: "flex",

        justifyContent: "flex-end",
        "& .MuiListItem-root": {
            width: "initial",
        },
    },
    headerOptionContainer: {
        // marginLeft: "auto",
        display: "flex",
        // "@media(max-width: 500px)": {
        //     flexDirection: "column",
        // },
    },

    avatarContainer: {
        // backgroundColor: "#272934",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        // padding: "5px 10px",
        // boxSizing: "border-box",
        // borderRadius: 30,
        cursor: "pointer",
    },
    name: {
        fontWeight: 600,
        color: "#000",
        textTransform: "uppercase",
        lineHeight: 1.2,
    },
    role: {
        fontWeight: 600,
        color: "#9B9D80",
        lineHeight: 1,
    },
    iconContent: {
        marginLeft: "auto",
    },

    popOver: {
        minWidth: "207px",
        minHeight: "104px",
        // boxSizing: "border-box",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
    },
    typography: {
        cursor: "pointer",
        color: "rgba(198, 30, 30, 0.65)",
        textAlign: "center",
    },
    printBtn: {
        minHeight: "50px !important",
        textTransform: "capitalize !important",
        borderRadius: "8px !important",
        marginRight: "10px !important",
    },
    cancelBtn: {
        minHeight: "50px !important",
        textTransform: "capitalize !important",
        borderRadius: "8px !important",
        backgroundColor: "#000 !important",
        marginLeft: "10px !important",
    },
}));
