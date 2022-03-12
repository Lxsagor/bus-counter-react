import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import {
    Autocomplete,
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useStyles } from "./styled";
import { LandingUrl } from "../../../constants/urls";
import { useHistory } from "react-router-dom";
import Search from "./Search";

const Hero = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <Box pt={7} pl={3}>
                <Box className={classes.heroTop}>
                    <Typography
                        variant="body2"
                        color="white"
                        className={classes.stop}
                    >
                        Stop Looking
                    </Typography>
                    <Typography
                        variant="body2"
                        color="primary"
                        className={classes.stop}
                        mb={3}
                    >
                        Start Tracking
                    </Typography>
                    <Typography
                        varinat="body2"
                        color="white"
                        className={classes.subtext}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Convallis amet sem quam egestas at arcu quis proin
                        nulla. Sollicitudin turpis imperdiet sed venenatis dui
                        ultrices vitae ac. Ultrices lorem feugiat in sem nunc
                        proin. Et vitae massa nec sit.
                    </Typography>
                </Box>
                <Search />
            </Box>
        </>
    );
};

export default Hero;
