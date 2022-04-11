import ImageOutlined from "@mui/icons-material/ImageOutlined";
import { Avatar, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { useStyles } from "./styled";
import { Edit } from "@mui/icons-material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
const FileUploader = ({
    label = "Add Banner Image",
    value = null,
    onChange,
    accept,
}) => {
    const classes = useStyles();
    const imageRef = useRef(null);
    const changeHandler = (e) => {
        let file = e.target.files[0];
        onChange(file);
    };
    return (
        <>
            {value ? (
                <Box className={classes.avatarBox}>
                    <IconButton
                        className={classes.editBtn}
                        onClick={() => imageRef.current.click()}
                    >
                        <Edit />
                    </IconButton>
                    <Avatar src={value} className={classes.avatar} />
                </Box>
            ) : (
                <Button
                    className={classes.fileButton}
                    startIcon={<FileUploadIcon fontSize="small" />}
                    onClick={() => imageRef.current.click()}
                >
                    {label}
                </Button>
            )}
            <input
                ref={imageRef}
                type="file"
                style={{ display: "none" }}
                onChange={(e) => changeHandler(e)}
                {...(accept && {
                    accept: accept,
                })}
                // accept={accept}
            />
        </>
    );
};
export default FileUploader;
