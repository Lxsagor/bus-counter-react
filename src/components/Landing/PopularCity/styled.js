import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    avatar: {
        height: "100% !important",
        width: "100% !important",
        borderRadius: "0 !important",
    },
    title: {
        textAlign: "center",
        fontSize: "25px",
        fontWeight: 700,
    },
    button: {
        minHeight: "45px",
        textTransform: "capitalize",
        borderRadius: "8px",
    },
}));
