import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    title: {
        fontSize: "18px",
        fontWeight: 600,
    },
    desc: {
        fontSize: "10px",
    },
    card: {
        "&:hover": {
            backgroundColor: "#33A551",
            color: "white",
            "& .iconify": {
                color: "white",
            },
            "& .MuiButton-root": {
                color: "white !important",
            },
        },
    },
    cardicon: {
        color: "#33A551",
        "&:hover": {
            color: "white",
        },
    },
}));
