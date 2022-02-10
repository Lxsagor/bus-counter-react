import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    field: {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "none",
            },
            // "&:hover fieldset": {},
            // "&.Mui-focused fieldset": { },
        },
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px !important",

            backgroundColor: "#FFFFFF",
        },
        "& .MuiButton-root ": {
            // width: "207px",
            height: "100%",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
}));
