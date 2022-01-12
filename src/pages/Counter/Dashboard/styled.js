import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
    root: {
        backgroundColor: "#FFFFFF",
        // minHeight: "1031px",
    },
    bookingBox: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        minHeight: "52px",
        // textAlign: "center",
    },
    bus: {
        margin: theme.spacing(3),
        backgroundColor: "#F6F7FB",
        borderRadius: "10px",
    },
}));
