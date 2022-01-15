import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CarouselCom from "./CarouselCom";
import { Box } from "@mui/system";

const OwlCarouselcomp = () => {
    return (
        <>
            <OwlCarousel className="owl-theme" loop margin={10} nav>
                <div class="item">
                    <CarouselCom />
                </div>{" "}
                <div class="item">
                    <CarouselCom />
                </div>{" "}
                <div class="item">
                    <CarouselCom />
                </div>{" "}
                <div class="item">
                    <CarouselCom />
                </div>
            </OwlCarousel>
            ;
        </>
    );
};

export default OwlCarouselcomp;
