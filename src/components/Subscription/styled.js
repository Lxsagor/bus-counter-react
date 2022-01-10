import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    table: {
        borderCollapse: "separate !important",
        borderSpacing: "0 10px !important",

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
}));
