import React from "react";
import { Pagination } from "@mui/material";
import { useStyles } from "./styled";

const DataPaginator = () => {
    const classes = useStyles();
    return (
        <Pagination
            className={classes.paginate}
            hidePrevButton
            count={10}
            variant="outlined"
            shape="rounded"
            size="large"
        />
    );
};

export default DataPaginator;
