import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
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
        "& .MuiButton-root": {
            minHeight: "55px",
            borderRadius: "8px",
            textTransform: "initial",
        },
    },
    pdfButton: {
        "& .MuiButton-root": {
            minHeight: "43px",
            borderRadius: "21.5px",
            textTransform: "initial",
            backgroundColor: "#FFFFFF",
            color: "black",
        },
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
}));
