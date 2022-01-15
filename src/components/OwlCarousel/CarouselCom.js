import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import User from "../../assets/landing/user.png";
import { useStyles } from "./styled";

const CarouselCom = () => {
    const [value, setValue] = React.useState(5);
    const classes = useStyles();
    return (
        <>
            <Card>
                <CardContent>
                    <Box className={classes.card}>
                        <Rating name="read-only" value={value} readOnly />
                        <Typography mb={3} mt={3} px={3}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Facilisis pharetra commodo consectetur arcu ut
                            pretium id in viverra. Nulla sem eu vehicula
                            senectus eget libero, dignissim. Dolor.in viverra.
                            Nulla sem eu vehicula senectus.
                        </Typography>
                        <Avatar src={User} className={classes.user} />
                        <Typography variant="h6">Mary Jane</Typography>
                        <Typography
                            variant="body2"
                            className={classes.subTitle}
                        >
                            Entrepreneur
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default CarouselCom;
