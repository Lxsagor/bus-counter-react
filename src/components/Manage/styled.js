import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            width: "474px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiButton-root ": {
            width: "207px",
            height: "100%",
        },
    },
}));
