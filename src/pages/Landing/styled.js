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
    busesroot: {
        backgroundColor: theme.palette.primary.main,
    },
    main: {
        minHeight: "53px",
    },
    route: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .iconify": {
            color: "white",
            height: "24px",
            width: "24px",
        },
    },
    routeText: {
        fontSize: "20px",
        color: "#fff",
    },
}));
