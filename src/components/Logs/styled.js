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
    actionCell: {
        width: "100%",
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "initial !important",
        gap: "10px",
        "& .MuiButton-root": {
            width: "calc(100%/2)",
            // minWidth: "70px !important",
            fontSize: "12px !important",
        },
        "@media(max-width: 1052px)": {
            flexDirection: "column",
            "& .MuiButton-root": {
                width: "100%",
                height: "100%",
            },
        },
    },
}));
