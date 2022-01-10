import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    paginate: {
        "& ul": {
            justifyContent: "flex-end",
        },
        "& .MuiPaginationItem-root": {
            borderRadius: "8px !important",
            color: "#fff !important",
        },
        "& .Mui-selected": {
            backgroundColor: theme.palette.primary.main + "!important",
        },
    },
}));
