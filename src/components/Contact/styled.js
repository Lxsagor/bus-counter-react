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
                backgroundColor: "#fff",
                color: "#000",
            },
        },
    },
    field: {
        "& .MuiOutlinedInput-input": {
            borderRadius: "8px",
            backgroundColor: "#F4F5F7",
        },
        "& .MuiButton-root": {
            borderRadius: "8px",
        },
    },
}));
