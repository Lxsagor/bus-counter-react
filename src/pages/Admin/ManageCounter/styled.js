import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    addbutton: {
        borderRadius: "27.5px",
        minwidth: "183px",
        minHeight: "55px",
        textTransform: "capitalize !important",
    },
    searchButton: {
        borderRadius: "14.7452px",
        minwidth: "194px",
        minHeight: "60px",
        textTransform: "capitalize !important",
    },

    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
    editButton: {
        borderRadius: "9.61712px",
        textTransform: "capitalize !important",
    },
}));
