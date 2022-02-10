import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        m: "auto",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        minWidth: "200px",
    },
    avatar: {
        height: "50px",
        width: "50px",
    },
    text: {
        fontSize: "20px",
    },
}));
