import { makeStyles } from "@mui/styles";
import About from "../../../assets/landing/About.png";

export const useStyles = makeStyles(() => ({
    toolbar: {
        backgroundColor: "#000",
    },
    list: {
        display: "flex",
        color: "#fff",
        justifyContent: "center",
        "@media (max-width: 767px)": {
            flexDirection: "column",
        },

        "& a": {
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",

            "&:hover": {
                backgroundColor: "#33A551",
            },
        },
        "& a.active": {
            backgroundColor: "#33A551",
        },
    },
    footer: {
        backgroundColor: "#000",
        color: "#FFFFFF",
        minWidth: "422px",
    },
    icon: {
        "& .MuiSvgIcon-root": {
            backgroundColor: "#33A551",
            color: "#fff",
            padding: 5,
            borderRadius: "50%",
            fontSize: 30,
        },
        "& .iconify": {
            backgroundColor: "#33A551",
            color: "#fff",
            padding: 5,
            borderRadius: "50%",
            fontSize: 30,
        },
    },
    avatar: {
        width: "165px !important",
        height: "76px !important",
        borderRadius: "0 !important",
        marginBottom: "20px !important",
    },
    footerList: {
        color: "#fff",
        margin: 0,
        padding: 0,

        "& a": {
            color: "#fff",

            textDecoration: "none",
        },

        "& .MuiListItem-root": {
            paddingLeft: "0 !important",
        },
    },
    subfield: {
        backgroundColor: "#fff",
        borderRadius: "40.4064px",
        textAlign: "right",
        minHeight: "59.55px",
    },
    subBtn: {
        borderRadius: "40.4064px !important",
        minHeight: "59.55px !important",
        textTransform: "capitalize !important",
        // float: "right",
    },
    serviceroot: {
        textAlign: "center",
    },
    serviceTitle: {
        fontWeight: "600 !important",
        fontSize: "20px !important",
        position: "relative ",
        "&::after": {
            content: "''",
            width: "114px",
            height: "4px",
            backgroundColor: "#33A551",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%) ",
        },
    },
    aboutRoot: {
        backgroundImage: `url(${About})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        minHeight: "546px",
        position: "relative",
    },
    aboutoverlay: {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.53)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    aboutTitle: {
        fontSize: "30px",
        color: "#fff",
        position: "relative",
        "&::after": {
            content: "''",
            width: "85px",
            height: "4px",
            backgroundColor: "#FFFFFF",
            position: "absolute",
            bottom: 0,
            // left: "50%",
            transform: "translateX(-155%) !important",
        },
    },
    aboutDesc: {
        color: "#fff",
        fontSize: "10px !important",
    },
    aboutLink: {
        color: "white",
    },
    stop: {
        fontSize: "60px !important",
        fontWeight: 500,
    },
    subtext: {
        fontSize: "15px !important",
    },
    ticketOption: {
        backgroundColor: " #F6F7FB",
        minHeight: "159px;",
        opacity: "0.9",
        borderRadius: "10px",
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "5px !important",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
    srchBtn: {
        borderRadius: "8px !important",
        minHeight: "30px !important",
        textTransform: "capitalize !important",
    },
}));
