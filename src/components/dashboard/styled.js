import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: "9px",
        height: "100%",
    },
    table: {
        borderCollapse: "separate !important",
        borderSpacing: "0 10px !important",

        // "& .MuiTableCell-head": {
        //     backgroundColor: theme.palette.primary.main,
        //     color: "white",
        // },
        // "& .MuiTableCell-body": {
        //     backgroundColor: "#fff",
        //     color: "#000",
        // },

        "& .MuiTableRow-head": {
            backgroundColor: theme.palette.primary.main,
            color: "white",
            "& .MuiTableCell-head": {
                color: "white",
            },
        },
        "& .MuiTableBody-root": {
            "& .MuiTableRow-root": {
                backgroundColor: "#fff",
                color: "#000",
            },
        },
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
    },
}));
