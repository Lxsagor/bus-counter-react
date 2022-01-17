import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    busComp: {
        borderStyle: "solid !important",
        borderWidth: "0 0 0 4px  !important",
        borderColor: "green !important",
    },
    routeDetails: {
        display: "flex",
        flexDirection: "column",
    },
    bookTicketBtn: {
        textTransform: "capitalize",
        borderRadius: "9.05755px",
    },
    statusBtn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        "& .MuiAvatar-root": {
            width: 34,
            height: 44,
            borderRadius: 0,
            marginBottom: 10,
        },

        "& .MuiTypography-root": {
            fontSize: 17,
            color: "#000",
            fontWeight: 600,
            textTransform: "capitalize",
        },
    },

    seatBtn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        color: "#000 !important",
    },

    bookSeatBtn: {
        color: "rgba(198, 30, 30, 0.65) !important",
    },
    selectSeatBtn: {
        color: "#33A551 !important",
    },
    fare: {
        fontSize: "21px !important",
        fontWeight: "32px !important",
        marginBottom: "10px !important",
    },
    confirmBtn: {
        minHeight: "57px",
        borderRadius: "7.12px",
        textTransform: "capitalize !important",
    },
    busSeat: {
        backgroundColor: "#F6F7FB",
    },
    busRoot: {
        backgroundColor: "#FFFFFF",
        borderRadius: "21.7px",
        paddingBottom: "10px",
        // padding: "10px !important",
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "9px !important",
            backgroundColor: "rgba(196, 196, 196, 0.4)",
        },
    },
    point: {
        "& .MuiInputBase-adornedEnd": {
            borderRadius: "9px !important",
            backgroundColor: "rgba(196, 196, 196, 0.4)",
        },
    },
    busesroot: {
        backgroundColor: theme.palette.primary.main,
    },
    main: {
        minHeight: "53px",
    },
    route: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .iconify": {
            color: "white",
            height: "24px",
            width: "24px",
        },
    },
    routeText: {
        fontSize: "20px",
        color: "#fff",
    },
}));
