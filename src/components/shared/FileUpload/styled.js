import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    fileButton: {
        border: "1px dashed #000000 !important",
        borderRadius: "8px !important",
        width: "100% !important",
        height: "52px !important",
        marginBottom: "30px!important",
        color: "black !important",
        opacity: "0.6 !important",
        display: "flex",
        flexDirection: "row",
        "& .MuiSvgIcon-root": {
            fontSize: "24px !important",
        },
    },
    avatarBox: {
        width: "120px ",
        height: "120px ",
        position: "relative",
    },
    avatar: {
        width: "100% !important",
        height: "100% !important",
    },
    editBtn: {
        position: "absolute !important",
        color: "#000",
        backgroundColor: "#fff !important",
        top: 0,
        right: 0,
        zIndex: 99,
    },
}));
