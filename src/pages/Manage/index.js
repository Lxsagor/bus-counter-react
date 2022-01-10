import { Box } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import ManageSearchBox from "../../components/Manage/ManageSearchBox";
import ManageUserTable from "../../components/Manage/ManageUserTable";
import { useStyles } from "../../components/Manage/styled";
import DataPaginator from "../../components/shared/DataPaginator";
import { SiteUrl } from "./../../constants/urls";

const Manage = () => {
    const history = useHistory();

    const classes = useStyles();

    const controlHandler = () => {
        history.push(SiteUrl.manageCompany.add);
    };

    return (
        <>
            <Box m={5}>
                <ManageSearchBox
                    isControl={true}
                    controlHandler={controlHandler}
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
