import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    button: {
        "& .MuiButton-root": {
            borderRadius: "4px",
            minHeight: "64px",
            textTransform: "initial",
        },
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
}));
