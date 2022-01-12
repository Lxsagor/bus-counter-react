import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "4px",
        minHeight: "64px",
        textTransform: "capitalize !important",
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
    title: {
        borderRadius: "4px",
        backgroundColor: theme.palette.primary.main,
        minHeight: "64px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        // textAlign: "center",

        // marginTop: "50%",
    },
}));
