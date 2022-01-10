import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
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
                backgroundColor: "#E5E5E5",
                color: "#000",
            },
        },
    },
}));
