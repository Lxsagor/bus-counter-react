import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    list: {
        "& a": {
            textDecoration: "none",
            display: "block",
            width: "100%",
        },
        "& .MuiListItem-root": {
            padding: "16px 8px !important",
        },
        "& .MuiTypography-root": {
            color: "rgba(0, 0, 0, 0.5)",
        },

        "& a.active": {
            backgroundColor: "#E5E5E5",
            borderTopLeftRadius: "18px",
            borderBottomLeftRadius: "18px",
            "& .MuiSvgIcon-root": {
                color: theme.palette.primary.main,
            },
            "& .MuiTypography-root": {
                color: theme.palette.primary.main,
            },
        },
        // "& .MuiListItemText": { textDecoration: "none" },
    },
}));
