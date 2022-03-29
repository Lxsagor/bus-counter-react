import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    field: {
        "& .MuiOutlinedInput-input": {
            // borderRadius: "8px",
            // width: "368px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffff",
        },
    },
    actionCell: {
        padding: 0,
        margin: 0,
        width: "50px !important",
        display: "inline-block !important",

        // "& .MuiTableCell-root": {
        //     padding: 0,
        //     margin: 0,
        //     width: "50px !important",
        //     display: "inline-block !important",
        // },
    },
    seatBtn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#000 !important",
    },
}));
