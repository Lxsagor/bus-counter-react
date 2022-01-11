import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../constants/urls";
import { useStyles } from "./styled";

const BusCard = ({
    title = "",
    subTitle = "",
    control = () => {},
    button = "",
}) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Box mt={2}>
                    <Typography variant="h6">{title}</Typography>
                </Box>
                <Box mt={1}>
                    <Typography> {subTitle}</Typography>
                </Box>
                <Box mt={2}>
                    <Button fullWidth variant="contained" onClick={control}>
                        {button}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default BusCard;
