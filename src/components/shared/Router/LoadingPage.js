import React from "react";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const LoadingPage = () => {
    return (
        <FadeLoader color="green" loading={true} css={override} size={150} />
    );
};

export default LoadingPage;
