import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ManageUserTable from "../../../components/Manage/ManageUserTable";
import { useStyles } from "../../../components/Manage/styled";
import ManageSearchBox from "../../../components/SearchBox";
import DataPaginator from "../../../components/shared/DataPaginator";
import {
    fetchCompanies,
    searchCompany,
} from "../../../store/actions/SuperAdmin/companyAction";
import { SuperAdminUrl } from "./../../../constants/urls";

const Manage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const { companies } = useSelector((state) => state.company);

    const controlHandler = () => {
        history.push(SuperAdminUrl.manageCompany.add);
    };

    const searchHandler = (data) => {
        dispatch(searchCompany(data));
    };

    useEffect(() => {
        dispatch(fetchCompanies());
    }, [dispatch]);

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
        dispatch(fetchCompanies(value));
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
                    searchHandler={searchHandler}
                />

                <Box mt={3}>
                    <ManageUserTable />
                </Box>
                <Box m={3}>
                    <DataPaginator
                        count={Math.floor(
                            companies?.meta?.total / companies?.meta?.per_page
                        )}
                        page={page}
                        onChange={handleChange}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Manage;
