import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "8px",
        minHeight: "55px",
        textTransform: "capitalize !important",
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
}));
