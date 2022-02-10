import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#FFFFFF",
    },
    field: {
        color: "#000",
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
    fieldlast: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "rgba(51, 165, 81, 0.11)",
        },
    },
    fieldnext: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "rgba(198, 30, 30, 0.11)",
        },
    },
    infopageBtn: {
        display: "flex",
        justifyContent: "flex-end",
    },
}));
