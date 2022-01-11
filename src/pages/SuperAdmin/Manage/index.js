import { Box, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import ManageSearchBox from "../../../components/SearchBox";
import ManageUserTable from "../../../components/Manage/ManageUserTable";
import { useStyles } from "../../../components/Manage/styled";
import DataPaginator from "../../../components/shared/DataPaginator";
import { SuperAdminUrl } from "./../../../constants/urls";

const Manage = () => {
    const history = useHistory();

    const classes = useStyles();

    const controlHandler = () => {
        history.push(SuperAdminUrl.manageCompany.add);
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
                <ManageSearchBox
                    isControl={true}
                    controlHandler={controlHandler}
                    controlLabel="Add Company"
                />

                <Box mt={3}>
                    <ManageUserTable />
                </Box>
                <Box m={3}>
                    <DataPaginator />
                </Box>
            </Box>
        </>
    );
};

export default Manage;
