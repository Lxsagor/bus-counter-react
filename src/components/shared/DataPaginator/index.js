import React from "react";
import { Pagination } from "@mui/material";
import { useStyles } from "./styled";

const DataPaginator = ({ count, page, onChange }) => {
    const classes = useStyles();
    return (
        <Pagination
            className={classes.paginate}
            hidePrevButton
            count={count}
            page={page}
            onChange={onChange}
            variant="outlined"
            shape="rounded"
            size="large"
        />
    );
};

export default DataPaginator;
