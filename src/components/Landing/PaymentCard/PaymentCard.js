import React from "react";
import { Avatar, Card, CardContent } from "@mui/material";
import Visa from "../../../assets/landing/visa.png";
import { useStyles } from "./styled";

const PaymentCard = () => {
    const classes = useStyles();
    return (
        <>
            <Card>
                <CardContent>
                    <Avatar src={Visa} className={classes.avatar} />
                </CardContent>
            </Card>
        </>
    );
};

export default PaymentCard;
