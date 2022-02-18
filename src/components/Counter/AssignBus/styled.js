import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
    headtext: {
        fontFamily: "Inter",
        fontWeight: "500 !important",
        fontSize: "18px !important",
        lineHeight: "22px !important",
    },
    submitBtn: {
        textTransform: "capitalize !important",
        borderRadius: "8px !important",
        minHeight: "50px !important",
    },
}));
