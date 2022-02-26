import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
    selectBox: {
        "& .MuiSelect-select": {
            backgroundColor: "#FFFFFF",
        },
    },
    button: {
        minHeight: "55px",
        borderRadius: "8px !important",
        textTransform: "initial !important",
    },
    pdfButton: {
        minHeight: "43px !important",
        borderRadius: "10px !important",
        backgroundColor: "#FFFFFF !important",
        color: "black !important",
        textTransform: "capitalize !important",
        marginRight: "10px !important",
    },
    scheduleButton: {
        minHeight: "43px !important",
        borderRadius: "10px !important",
        textTransform: "capitalize !important",
    },
    textField: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            minHeight: "113px",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
    title: {
        borderRadius: "4px",
        backgroundColor: theme.palette.primary.main,
        minHeight: "64px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        // textAlign: "center",

        // marginTop: "50%",
    },
    fareBox: {
        display: "flex",
        alignItems: "center",
    },
    btn: {
        textTransform: "capitalize !important",
        borderRadius: "5px !important",
    },
    timeBox: {
        display: "flex",
        // border: "1px solid black",
        // justifyContent: "center",
        alignItems: "center",
    },
    dltIcon: {
        cursor: "pointer",
    },
}));
