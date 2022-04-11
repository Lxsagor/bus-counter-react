import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    title: {
        fontSize: "18px !important",
        fontWeight: "600 !important",
    },
    desc: {
        fontSize: "10px !important",
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
            color: "white !important",
        },
    },
}));
