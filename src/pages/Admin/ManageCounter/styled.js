import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    addbutton: {
        "& .MuiButton-root": {
            borderRadius: "27.5px",
            minwidth: "183px",
            minHeight: "55px",
        },
    },
    searchButton: {
        "& .MuiButton-root": {
            borderRadius: "14.7452px",
            minwidth: "194px",
            minHeight: "60px",
        },
    },

    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
    editButton: {
        "& .MuiButton-root": {
            borderRadius: "9.61712px",
        },
    },
}));
