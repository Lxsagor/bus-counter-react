import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useStyles } from "../styled";
import { Icon } from "@iconify/react";
import FileUploader from "../../../../components/shared/FileUpload/FileUploader";
import { useDispatch } from "react-redux";
import { uploadDriverImage } from "../../../../store/actions/counterAction";

const AddDriver = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        image: "",
        name: "",
        address: "",
        phone: "",
        details: "",
        docs: [],
    });
    const imageChangeHandler = (file) => {
        dispatch(
            uploadDriverImage(file, (url) =>
                formData((prevState) => ({
                    ...prevState,
                    image: url,
                }))
            )
        );
        // }
    };
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Add Driver</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box my={5}>
                    <Button variant="Text" component="label">
                        <Box className={classes.icon}>
                            <Icon
                                icon="ant-design:user-outlined"
                                height="25"
                                width="25"
                            />
                        </Box>
                        <FileUploader
                            label="Upload Image"
                            value={formData.avatar}
                            onChange={imageChangeHandler}
                        />
                    </Button>
                </Box>
                <Grid container spacing={4}>
                    <Grid item lg={4} xs={12}>
                        <TextField
                            fullWidth
                            className={classes.field}
                            label="Driver's Name"
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <TextField
                            fullWidth
                            className={classes.field}
                            label="Address"
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <TextField
                            fullWidth
                            className={classes.field}
                            label="Phone Number"
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <TextField
                            fullWidth
                            label="Details"
                            multiline
                            rows={10}
                            className={classes.bigText}
                        />
                    </Grid>
                </Grid>
                <Box my={5}>
                    <Grid container>
                        <Grid item lg={2}>
                            <Button
                                variant="Text"
                                fullWidth
                                component="label"
                                className={classes.uploadbtn}
                            >
                                <Box className={classes.uploadicon}>
                                    <Icon
                                        icon="clarity:upload-line"
                                        height="20"
                                        width="20"
                                    />
                                </Box>
                                <strong>Upload Files</strong>
                                <input type="file" hidden />
                            </Button>
                            <Typography className={classes.uploadText}>
                                You can upload any files regarding this person
                                NID Card/Passport/Identity Document
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container>
                    <Grid item lg={2}>
                        <Button
                            size="large"
                            variant="contained"
                            className={classes.addDriverBtn}
                        >
                            Add Driver
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AddDriver;
