import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    button: {
        "& .MuiButton-root": {
            borderRadius: "8px",
            minHeight: "55px",
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
