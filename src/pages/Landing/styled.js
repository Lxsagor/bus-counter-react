import { makeStyles } from "@mui/styles";
import HeroImg from "../../assets/landing/HeroImg.png";

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100%",
        height: "100%",
        minHeight: "100vh",
    },
    hero: {
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
    },

    table: {
        borderCollapse: "separate !important",
        borderSpacing: "0 10px !important",

        "& .MuiTableCell-root": {
            borderBottom: 0,
            textAlign: "center",
        },

        "& .MuiTableHead-root": {
            "& .MuiTableCell-root:first-child": {
                textAlign: "left",
            },
        },

        "& .MuiTableBody-root": {
            backgroundColor: "#F6F7FB",
            "& .MuiTableRow-root": {
                marginBottom: 10,
                "& .MuiTableCell-root:first-child": {
                    borderLeft: "4px solid green",
                    textAlign: "left",
                },
                "& .MuiTableCell-root": {
                    verticalAlign: "top",
                },
            },
        },
    },
    icon: {
        "& .MuiSvgIcon-root": {
            backgroundColor: "#33A551",
            color: "#fff",
            padding: 5,
            borderRadius: "8px",
            fontSize: 30,
        },
    },
    routeF: {
        display: "flex",
        alignItems: "center",
    },
    coachName: {
        minHeight: "43px",
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "200px",
    },
    seatName: {
        minHeight: "43px",
        color: "#fff",
        backgroundColor: "#F0780A",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100px",
        textAlign: "right",
    },
    iconRoute: {
        display: "flex",
    },
    payCard: {
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
    },
    // pnrNumber: {
    //     display: "flex",
    //     justifyContent: "right",
    // },
}));
