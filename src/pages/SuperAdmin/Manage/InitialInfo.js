import React from "react";

const InitialInfo = () => {
    return (
        <div>
            {" "}
            <Box sx={{ marginTop: "50px" }}>
                <Typography variant="h6">Admin Initial Info</Typography>
            </Box>
            <Box
                mb={3}
                sx={{
                    width: "42px",
                    height: "4px",
                    backgroundColor: "#33A551",
                }}
            ></Box>
            <Grid container className={classes.field} spacing={4}>
                <Grid item lg={3} md={6} xs={12}>
                    <Typography>Name</Typography>
                    <TextField fullWidth />
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <Typography>Phone</Typography>
                    <TextField fullWidth />
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <Typography>Email</Typography>
                    <TextField fullWidth />
                </Grid>
                <Grid item lg={3} md={6} xs={12} className={classes.field}>
                    <Typography>Initial Password</Typography>
                    <TextField
                        fullWidth
                        type={values.showPassword ? "text" : "password"}
                        values={values.password}
                        onChange={handleChange("password")}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default InitialInfo;
