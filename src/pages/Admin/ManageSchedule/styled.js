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
    button: {
        minHeight: "55px",
        borderRadius: "8px",
        textTransform: "initial !important",
    },
    pdfButton: {
        minHeight: "43px !important",
        borderRadius: "21.5px !important",
        backgroundColor: "#FFFFFF !important",
        color: "black !important",
        textTransform: "initial !important",
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
}));
