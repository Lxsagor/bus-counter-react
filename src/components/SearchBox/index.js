import { Add, Search } from "@mui/icons-material";
import {
    Button,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCompany } from "../../store/actions/companyAction";
import { useStyles } from "./styled";

const ManageSearchBox = ({
    isControl = false,
    controlLabel = "Add",
    controlHandler = () => {},
    searchHandler = (prop) => {},
}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [formData, setFormData] = useState({
        keyword: "",
    });

    const fieldChangeHandler = (field, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const submitHandler = () => {
        searchHandler(formData);
        // dispatch(searchCompany(formData));
    };
    return (
        <>
            <Grid
                container
                justifyContent="space-between"
                alignItems="stretch"
                spacing={4}
            >
                <Grid item lg={5} xs={7}>
                    <TextField
                        sx={{ mr: 1 }}
                        fullWidth
                        label="Search"
                        className={classes.field}
                        onChange={(e) =>
                            fieldChangeHandler("keyword", e.target.value)
                        }
                        value={formData.keyword}
                        onKeyPress={(e) => e.key === "Enter" && submitHandler()}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <Search onClick={submitHandler} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {/* <Button sx={{ borderRadius: "8px" }} variant="contained">
                        Search
                    </Button> */}
                </Grid>
                {isControl && (
                    <Grid item xl={2} lg={3} md={4} xs={5}>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: "28px", height: "100%" }}
                            fullWidth
                            onClick={controlHandler}
                        >
                            <Add />
                            {controlLabel}
                        </Button>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default ManageSearchBox;
