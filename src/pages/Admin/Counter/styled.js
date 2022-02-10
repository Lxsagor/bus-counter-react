import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    addbutton: {
        borderRadius: "27.5px !important",
        minwidth: "183px",
        minHeight: "55px",
        textTransform: "capitalize !important",
    },
    searchButton: {
        borderRadius: "14.7452px !important",
        minwidth: "194px",
        minHeight: "60px",
        textTransform: "capitalize !important",
    },

    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px !important",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },
    editButton: {
        borderRadius: "9.61712px !important",
        textTransform: "capitalize !important",
    },
    card: {
        // minWidth: "337.91px",

        minHeight: "211.35px",
    },
    button: {
        borderRadius: "4.91506px",
        // minWidth: "286.3px",
        minHeight: "56.52px",
        textTransform: "capitalize !important",
    },
}));
