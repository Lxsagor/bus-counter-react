import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Landing/Home/Footer";
import Header from "../components/Landing/Home/Header";

const LandingLayout = ({ children }) => {
    return (
        <Box>
            <Header />
            {children}
            <Footer />
        </Box>
    );
};

export default LandingLayout;
