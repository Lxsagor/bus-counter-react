import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "10px !important",
        minHeight: "40px",
        textTransform: "capitalize !important",
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
    title: {
        borderRadius: "4px",
        backgroundColor: "rgba(51, 165, 81, 0.14)",
        minHeight: "54px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        // textAlign: "center",

        // marginTop: "50%",
    },
    busno: {
        color: "#000",
    },
    card: {
        // minWidth: "337.91px",

        minHeight: "211.35px",
    },
    managebutton: {
        borderRadius: "4.91506px",
        // minWidth: "286.3px",
        minHeight: "56.52px",
        textTransform: "capitalize !important",
    },
    deleteBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    seatBtn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // minWidth: "35px !important",
        // maxWidth: "30px !important",
        color: "#000 !important",
        textTransform: "initial !important",
    },
    seatBox: {
        border: "1px solid black",
        maxWidth: "350px",
    },
    selectSeatBtn: {
        color: "#33A551 !important",
    },
}));
