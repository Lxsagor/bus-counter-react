import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "8px",
        minHeight: "height: 44px;",
        textTransform: "initial !important",
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
    track: {
        backgroundColor: theme.palette.primary.main,
        minHeight: "36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "0px 18px 18px 0px",
    },
    coach: {
        marginLeft: "10px !important",
    },
}));
