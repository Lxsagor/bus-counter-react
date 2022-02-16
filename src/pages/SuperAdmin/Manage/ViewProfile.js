import {
    Button,
    Dialog,
    DialogContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useStyles } from "../../../components/dashboard/styled";
import ExtendSubs from "../../../components/Manage/ExtendSubs";
import { fetchCompany } from "../../../store/actions/SuperAdmin/companyAction";
import { fetchAdmin } from "../../../store/actions/SuperAdmin/adminAction";

const ViewProfile = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { company } = useSelector((state) => state.company);
    const { admin } = useSelector((state) => state.admin);
    const [extend, setExtend] = React.useState(false);

    const { id, companyId } = useParams();

    useEffect(() => {
        if (companyId) {
            dispatch(fetchCompany(companyId));
        }
    }, [dispatch, companyId]);

    useEffect(() => {
        if ((companyId, id)) {
            dispatch(fetchAdmin(companyId, id));
        }
    }, [dispatch, companyId, id]);
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Viewing Profile</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box mt={5}>
                    <Grid container>
                        <Grid item lg={6} xs={12}>
                            <Grid
                                container
                                spacing={4}
                                className={classes.field}
                            >
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Company Name</Typography>
                                    <TextField
                                        value={company.name}
                                        fullWidth
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>No of Counters</Typography>
                                    <TextField
                                        fullWidth
                                        value={company.no_of_counters}
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Admin Name</Typography>
                                    <TextField
                                        value={admin.name}
                                        fullWidth
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Email</Typography>
                                    <TextField
                                        value={admin.email}
                                        fullWidth
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Phone</Typography>
                                    <TextField
                                        value={admin.phone}
                                        fullWidth
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Last Subscription</Typography>
                                    <TextField
                                        value={moment(
                                            company.sub_start_date
                                        ).format("M/D/Y")}
                                        className={classes.fieldlast}
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Next Subscription</Typography>

                                    <TextField
                                        value={moment(
                                            company.sub_end_date
                                        ).format("M/D/Y")}
                                        className={classes.fieldnext}
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>

                                {/* <Grid item>
                                    <Button
                                        variant="contained"
                                        style={{
                                            textTransform: "initial",
                                            backgroundColor: "black",
                                            borderRadius: "8px",
                                            minWidth: "230px",
                                            minHeight: "50px",
                                        }}
                                    >
                                        Send Email To Admin
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        style={{
                                            textTransform: "initial",
                                            borderRadius: "8px",
                                           
                                        }}
                                    >
                                        Re-active User
                                    </Button>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container my={2} spacing={4}>
                        <Grid item lg={3}>
                            <Button
                                variant="contained"
                                fullWidth
                                style={{
                                    textTransform: "initial",
                                    backgroundColor: "black",
                                    borderRadius: "8px",
                                    // minWidth: "230px",
                                    minHeight: "50px",
                                }}
                            >
                                Send Email To Admin
                            </Button>
                        </Grid>
                        <Grid item lg={3}>
                            {/* <Button
                                variant="contained"
                                fullWidth
                                style={{
                                    textTransform: "initial",
                                    borderRadius: "8px",
                                    // minWidth: "230px",
                                    minHeight: "50px",
                                }}
                                onClick={() => setExtend(true)}
                            >
                                Extend
                            </Button> */}
                        </Grid>
                    </Grid>
                    {/* <Dialog
                        maxWidth="sm"
                        fullWidth
                        open={extend}
                        onClose={() => setExtend(false)}
                    >
                        <DialogContent>
                            <ExtendSubs
                                isControl={true}
                                controlHandler={() => setExtend(false)}
                            />
                        </DialogContent>
                    </Dialog> */}
                </Box>
            </Box>
        </>
    );
};

export default ViewProfile;
