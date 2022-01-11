import React from "react";
import { Box, Avatar, Dialog, DialogContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useStyles } from "./styled";
import { Add } from "@mui/icons-material";
import ContactTable from "../../../components/Contact/ContactTable";
import AddContactDialog from "../../../components/AddContactDialog";
import SearchBox from "../../../components/SearchBox";

const Contact = () => {
    const classes = useStyles();
    const [addContact, setAddContact] = React.useState(false);
    const controlHandler = () => {
        setAddContact(true);
    };
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Contact Details</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <SearchBox
                    isControl={true}
                    controlLabel="Add Contact"
                    controlHandler={controlHandler}
                />

                {/* <Grid
                    container
                    justifyContent="space-between"
                    spacing={4}
                    className={classes.field}
                >
                    <Grid item lg={7} xs={12}>
                        <TextField sx={{ mr: 1 }} label="Search" />
                        <Button
                            sx={{ borderRadius: "8px" }}
                            variant="contained"
                        >
                            Search
                        </Button>
                    </Grid>
                    <Grid item lg={2} xs={12}>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: "28px" }}
                            fullWidth
                            onClick={() => setAddContact(true)}
                        >
                            <Add />
                            Add Contact
                        </Button>
                    </Grid>
                </Grid> */}

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
                <Box my={4}>
                    <ContactTable />
                </Box>
            </Box>
        </>
    );
};

export default Contact;
