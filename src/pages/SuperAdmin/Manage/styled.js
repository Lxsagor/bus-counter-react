import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#FFFFFF",
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
}));
