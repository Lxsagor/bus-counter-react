import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Grid,
    Input,
    TextField,
    Typography,
    Chip,
    Stack,
} from "@mui/material";
import { useStyles } from "../styled";
import { Icon } from "@iconify/react";
import FileUploader from "../../../../components/shared/FileUpload/FileUploader";
import {
    addDriver,
    addStaff,
    fetchStaff,
    updateDriver,
    updateStaff,
} from "../../../../store/actions/Admin/staffAction";
import { uploadFile } from "../../../../store/actions/sharedAction.js";
import { useDispatch, useSelector } from "react-redux";
import { AdminUrl } from "../../../../constants/urls";
import { useHistory, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import {
    STAFF_VALIDATE_ERROR,
    FETCH_DRIVER,
    FETCH_STAFF,
} from "../../../../store/types";
import { fetchDriver } from "../../../../store/actions/Admin/staffAction";
import { toast } from "react-toastify";

const AddStaff = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { error, staff } = useSelector((state) => state.staff);
    const { buttonLoading } = useSelector((state) => state.shared);
    const { id } = useParams();
    const [formData, setFormData] = useState({
        image: null,
        name: "",
        address: "",
        phone: "",
        details: "",
        docs: [],
    });
    const [errors, setErrors] = useState({
        image: { text: "", show: false },
        name: { text: "", show: false },
        address: { text: "", show: false },
        phone: { text: "", show: false },
        details: { text: "", show: false },
        docs: { text: "", show: false },
    });
    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const fileChangeHandler = (file) => {
        dispatch(
            uploadFile(file, (url) => {
                let files = [...formData.docs];
                files.push(url);

                setFormData((prevState) => ({
                    ...prevState,
                    docs: files,
                }));
            })
        );
        // }
    };

    const imgChangeHandler = (file) => {
        dispatch(
            uploadFile(file, (url) => {
                setFormData((prevState) => ({
                    ...prevState,
                    image: url,
                }));
            })
        );
        // }
    };

    useEffect(() => {
        if (id) {
            dispatch(fetchStaff(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (staff && Object.keys(staff).length > 0) {
            let data = {
                ...staff,
                image: staff.image,
                name: staff.name,
                address: staff.address,
                phone: staff.phone,
                details: staff.details,
            };
            if (staff.hasOwnProperty("docs")) {
                data["docs"] = staff.docs;
            }

            setFormData((prevState) => ({
                ...prevState,
                ...data,
            }));
        }
    }, [staff]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.hasOwnProperty("id")) {
            dispatch(
                updateStaff(formData, () => history.push(AdminUrl.staff.index))
            );
        } else {
            dispatch(
                addStaff(formData, () => history.push(AdminUrl.staff.index))
            );
        }
    };

    const renderName = (url) => {
        let name = url.split("/");
        return name[name.length - 1];
    };

    useEffect(() => {
        if (error && Object.keys(error).length > 0) {
            Object.keys(error).forEach((key) => {
                setErrors((prevState) => ({
                    ...prevState,
                    [key]: { text: error[key][0], show: true },
                }));
            });
        }
    }, [error]);

    useEffect(() => {
        return () => {
            dispatch({
                type: STAFF_VALIDATE_ERROR,
                payload: null,
            });
        };
    }, [dispatch]);
    useEffect(() => {
        return () => {
            dispatch({
                type: FETCH_STAFF,
                payload: {},
            });
        };
    }, [dispatch]);

    const docDelete = (file) => {
        let files = formData.docs.filter((item) => item !== file);
        setFormData((prevState) => ({
            ...prevState,
            docs: files,
        }));
    };
    return (
        <>
            <form onSubmit={submitHandler}>
                <Box m={5}>
                    <Typography variant="h6">Add Staff</Typography>
                    <Box
                        mb={3}
                        sx={{
                            width: "42px",
                            height: "4px",
                            backgroundColor: "#33A551",
                        }}
                    ></Box>
                    {/* <Box my={5} className={classes.userBox}>
                    <Box className={classes.icon}>
                        <Icon
                            icon="ant-design:user-outlined"
                            height="25"
                            width="25"
                        />
                    </Box>
                </Box> */}

                    <Box mb={5}>
                        <Grid container>
                            <Grid item>
                                <FileUploader
                                    label="Upload Image"
                                    value={formData.image}
                                    onChange={imgChangeHandler}
                                    accept="image/*"
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Grid container spacing={4}>
                        <Grid item lg={4} xs={12}>
                            <TextField
                                fullWidth
                                className={classes.field}
                                label="Driver's Name"
                                value={formData.name}
                                onChange={(e) =>
                                    fieldChangeHandler("name", e.target.value)
                                }
                                error={errors.name.show}
                                helperText={errors.name.text}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TextField
                                fullWidth
                                className={classes.field}
                                label="Address"
                                value={formData.address}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "address",
                                        e.target.value
                                    )
                                }
                                error={errors.address.show}
                                helperText={errors.address.text}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TextField
                                fullWidth
                                className={classes.field}
                                label="Phone Number"
                                value={formData.phone}
                                onChange={(e) =>
                                    fieldChangeHandler("phone", e.target.value)
                                }
                                error={errors.phone.show}
                                helperText={errors.phone.text}
                            />
                        </Grid>
                        <Grid item lg={12}>
                            <TextField
                                fullWidth
                                label="Details"
                                multiline
                                rows={10}
                                className={classes.bigText}
                                value={formData.details}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "details",
                                        e.target.value
                                    )
                                }
                                error={errors.details.show}
                                helperText={errors.details.text}
                            />
                        </Grid>
                    </Grid>
                    <Box my={5}>
                        <Grid container>
                            <Grid item lg={2}>
                                <FileUploader
                                    label="Upload Files"
                                    onChange={fileChangeHandler}
                                />

                                <Stack direction="row" spacing={3} mb={3}>
                                    {formData.docs.map((item, i) => (
                                        <Chip
                                            key={i}
                                            label={renderName(item)}
                                            sx={{ margin: "2px" }}
                                            onDelete={() => docDelete(item)}
                                        />
                                    ))}
                                </Stack>

                                <Typography className={classes.uploadText}>
                                    You can upload any files regarding this
                                    person NID Card/Passport/Identity Document
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
                                type="submit"
                                {...(buttonLoading && {
                                    disabled: true,
                                    startIcon: (
                                        <BeatLoader
                                            color="white"
                                            loading={true}
                                            size={10}
                                        />
                                    ),
                                })}
                            >
                                {formData.hasOwnProperty("id")
                                    ? "Update details"
                                    : "Add Staff"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </>
    );
};

export default AddStaff;
