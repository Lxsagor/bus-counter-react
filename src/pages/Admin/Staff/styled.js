import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    field: {
        "& .MuiOutlinedInput-input": {
            // borderRadius: "8px",
            backgroundColor: "#FFFFFF",
        },
        "& .MuiInputBase-adornedEnd": {
            backgroundColor: "#FFFFFF",
        },
    },

    tabBox: {
        backgroundColor: "#FFFFFF",
        minHeight: "55px",
        paddingLeft: "100px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    activeTab: {
        position: "relative",
        color: "#33A551",
        "&::after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: "25%",
            width: "50%",
            height: 3,
            borderRadius: 8,
            backgroundColor: "#33A551",
        },
    },
    addBtn: {
        borderRadius: "8px !important",
        textTransform: "capitalize !important",
    },
    bigText: {
        backgroundColor: "#FFFFFF",
    },

    icon: {
        backgroundColor: "#FFFFFF",
        borderRadius: "50px",
        padding: "10px",
        marginRight: "20px",
    },
    uploadicon: {
        marginRight: "10px",
    },
    uploadbtn: {
        border: "2px dashed black",
        "& .MuiButton-root": {
            border: "2px dashed !important",
        },
    },
    uploadText: {
        opacity: "0.5",
        fontSize: "10px !important",
    },
    addDriverBtn: {
        borderRadius: "8px !important",
        textTransform: "capitalize !important",
    },
    editDBtn: {
        minHeight: "50px !important",
        textTransform: "capitalize !important",
        backgroundColor: "#000000 !important",
        borderRadius: "8px !important",
    },
    deleteDBtn: {
        minHeight: "50px !important",
        textTransform: "capitalize !important",
        backgroundColor: "rgba(210, 15, 15, 0.65) !important",
        borderRadius: "8px !important",
    },

    driverDText: {
        opacity: "0.5",
    },
}));
