import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    list: {
        display: "flex",

        justifyContent: "flex-end",
        "& .MuiListItem-root": {
            width: "initial",
        },
    },
}));
