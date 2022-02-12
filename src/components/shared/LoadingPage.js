import React from "react";
import { ClipLoader, FadeLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99999;
`;

const LoadingPage = () => {
    return (
        <FadeLoader color="green" loading={true} css={override} size={150} />
    );
};

export default LoadingPage;
