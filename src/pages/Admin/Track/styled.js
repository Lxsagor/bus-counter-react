import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    field: {
        "& .MuiSelect-outlined": {
            backgroundColor: "#FFFFFF",
        },
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
    btn: {
        minHeight: "55px !important",
        textTransform: "capitalize !important ",
    },
    timeBox: {
        display: "flex",
        alignItems: "center",
    },
}));
