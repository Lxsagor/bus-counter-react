import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiButton-root ": {
            width: "108px",
            height: "51px",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
}));
