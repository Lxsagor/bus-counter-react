import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    field: {
        "& .MuiOutlinedInput-input": {
            border: "none",
            borderRadius: "8px",
            width: "648px",
            backgroundColor: "#F4F5F7",
        },
        "& .MuiButton-root ": {
            width: "207px",
            height: "55px",
            borderRadius: "8px",
        },
    },
}));
