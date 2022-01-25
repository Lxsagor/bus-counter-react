import { makeStyles } from "@mui/styles";
import loginBG from "../../assets/auth/loginBG.png";

export const useStyles = makeStyles((theme) => ({
  loginBG: {
    backgroundImage: `url(${loginBG})`,
    backgroundSize: "40% 100% ",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  },
  loginForm: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
  },
  field: {
    marginBottom: "30px !important",
    "& .MuiOutlinedInput-input": {
      borderRadius: "20px !important",
      borderStyle: "none !important",
      backgroundColor: "#F6F7FB",
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
}));
