import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "8px",
        minHeight: "height: 44px;",
        textTransform: "initial !important",
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
    track: {
        backgroundColor: theme.palette.primary.main,
        minHeight: "36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "0px 18px 18px 0px",
    },
    coach: {
        marginLeft: "10px !important",
        color: "white",
    },
    busRoot: {
        backgroundColor: "#FFFFFF",
        borderRadius: "21.7px",
        // padding: "10px !important",
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
        width: 50,
        minWidth: "35px !important",
        maxWidth: "50px !important",
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
    cancelBtn: {
        minHeight: "57px",
        borderRadius: "7.12px",
        textTransform: "capitalize !important",
        marginTop: "20px !important",
        backgroundColor: "rgba(198, 30, 30, 0.65) !important",
    },
    ticket: {
        fontSize: "14px !important",
        fontWeight: "600 !important",
    },
    pnrFont: {
        color: theme.palette.primary.main,
        fontWeight: "500 !important",
        fontSize: "18px !important",
    },
    pdfBtn: {
        backgroundColor: "#000 !important",
        borderRadius: "4px !important",
        minHeight: "44px !important",
        textTransform: "capitalize !important",
        marginBottom: "20px !important",
        marginRight: "40px !important",
    },
    ticketItemRoot: {
        minHeight: "98px",
        backgroundColor: "rgba(51, 165, 81, 0.23)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
    },
    prntBtn: {
        color: "#fff !important",
        backgroundColor: "rgba(51, 165, 81, 0.51) !important",
        borderRadius: "8px !important",
        textTransform: "capitalize !important",
        fontSize: "13px !important",
        fontWeight: "normal !important",
    },
    pnrFont1: {
        color: theme.palette.primary.main,
        fontSize: "20px !important",
        fontWeight: "500 !important",
    },
    pnrFont2: {
        color: theme.palette.primary.main,
        fontWeight: "500 !important",
        fontSize: "13px !important",
    },
    ticketIcon: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: " rgba(51, 165, 81, 0.35) !important",
    },
    assignBusBtn: {
        borderRadius: "5px !important",
        minHeight: "40px !important",
        textTransform: "capitalize !important",
    },
}));
