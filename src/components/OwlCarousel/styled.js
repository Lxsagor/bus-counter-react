import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    subTitle: {
        // opacity: "0.5",
    },
    card: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        // justifyContent: "center",
        textAlign: "center",
        "& .MuiRating-root": {
            color: "green",
        },
    },
}));
