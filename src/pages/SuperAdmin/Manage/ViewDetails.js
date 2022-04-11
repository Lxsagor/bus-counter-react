import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogContent,
} from "@mui/material";
import React, { useEffect } from "react";
import SearchBox from "../../../components/SearchBox/index";
import { useStyles } from "./styled";
import Divider from "@mui/material/Divider";
import AdminTable from "../../../components/Manage/AdminTable";
import { SuperAdminUrl } from "../../../constants/urls";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany } from "../../../store/actions/SuperAdmin/companyAction";
import { searchAdmin } from "../../../store/actions/SuperAdmin/adminAction";
import AddContactDialog from "../../../components/SuperAdmin/AddContactDialog";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { company } = useSelector((state) => state.company);
    const { admins } = useSelector((state) => state.admin);
    const [addContact, setAddContact] = React.useState(false);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchCompany(id));
        }
    }, [dispatch, id]);

    const searchHandler = (data) => {
        dispatch(searchAdmin(id, data));
    };

    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Manage Company</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <SearchBox searchHandler={searchHandler} />
                <Card sx={{ mt: 5 }}>
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                            justifyContent="space-between"
                            alignItems="center"
                            py={3}
                        >
                            <Grid item lg={9}>
                                <Grid container>
                                    <Grid item lg={5}>
                                        <Box display="flex">
                                            <Typography>
                                                Company Name:
                                            </Typography>
                                            <Typography ml={3} color="primary">
                                                {company.name}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Box display="flex">
                                            <Typography>
                                                Number Of Admins:
                                            </Typography>
                                            <Typography ml={3} color="primary">
                                                {admins?.meta?.total}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Box display="flex">
                                            <Typography>
                                                Number Of Counters:
                                            </Typography>

                                            <Typography ml={3} color="primary">
                                                {company.no_of_counters}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={3}>
                                <Box className={classes.infopageBtn}>
                                    {/* <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            textTransform: "initial",
                                            borderRadius: "8px",
                                        }}
                                        onClick={() => setAddContact(true)}
                                    >
                                        Add Contact
                                    </Button> */}
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            textTransform: "initial",
                                            borderRadius: "8px",
                                        }}
                                        onClick={() =>
                                            history.push(
                                                SuperAdminUrl.manageCompany.addAdmin.replace(
                                                    ":id",
                                                    company.id
                                                )
                                            )
                                        }
                                    >
                                        Add Admin
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Box pt={3}>
                            <Typography variant="h6" color="primary">
                                View Admins
                            </Typography>
                            <Box
                                mb={3}
                                sx={{
                                    width: "42px",
                                    height: "4px",
                                    backgroundColor: "#33A551",
                                }}
                            ></Box>
                            <AdminTable />
                        </Box>
                    </CardContent>
                </Card>
                <Dialog
                    maxWidth="sm"
                    fullWidth
                    open={addContact}
                    onClose={() => setAddContact(false)}
                >
                    <DialogContent>
                        <AddContactDialog />
                    </DialogContent>
                </Dialog>
            </Box>
        </>
    );
};

export default ViewDetails;
