import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    Avatar,
    IconButton,
    Box,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styled";

const ServiceCard = ({ icon, title, desc }) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Box textAlign="left" className={classes.cardicon}>
                        {icon}
                    </Box>
                    <Typography
                        variant="body2"
                        className={classes.title}
                        mb={1}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body2" className={classes.desc}>
                        {desc}
                    </Typography>
                    <Button size="small" variant="text" color="primary">
                        Read more
                    </Button>
                </CardContent>
            </Card>
        </>
    );
};

export default ServiceCard;
