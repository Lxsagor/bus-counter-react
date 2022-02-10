import { makeStyles } from "@mui/styles";
import loginBG from "../../assets/auth/loginBG.png";

export const useStyles = makeStyles((theme) => ({
    // specialOutline: {
    //   border: "none",
    // },
    loginBG: {
        backgroundSize: "65% 160%",
        background: `url(${loginBG}) left center no-repeat`,
        width: "100%",
        height: "100%",
        minHeight: "100vh",
    },
    loginForm: {
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "column",
    },
    field: {
        marginBottom: "30px !important",

        "& .MuiOutlinedInput-root": {
            // "& fieldset": {
            //     border: "none",
            // },
            // "&:hover fieldset": {},
            // "&.Mui-focused fieldset": { },
        },

        "& .MuiOutlinedInput-input": {
            borderRadius: "10px !important",
            backgroundColor: "#F6F7FB",

            // "& .MuiInputBase-adornedEnd": {
            //   backgroundColor: "#F6F7FB",
            // },
        },
    },
    login: {
        display: "flex",
    },

    loginbtn: {
        borderRadius: "8px !important",
        minHeight: "40px",
        textTransform: "capitalize !important",
    },

    forgetRoot: {
        backgroundColor: "#F6F6F6",
        borderRadius: "18px !important",
        // minHeight: "70vh",
    },

    forgetBox: {
        textAlign: "center",
    },
    phonefield: {
        "& .MuiOutlinedInput-input": {
            // width: "368px",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px !important",
        },
    },
    sendOtpBTn: {
        marginTop: "30px",
        textTransform: "capitalize !important",
        minHeight: "50px !important",
        borderRadius: "8px !important",
    },
    inputStyle: {
        width: "50px !important",
        height: "50px",
        margin: "10px 8px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#ffff",

        // color: "white",
    },
}));
