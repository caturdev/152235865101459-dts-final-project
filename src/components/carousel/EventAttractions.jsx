import { Fragment } from "react";
import { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";

import { Skeleton } from "@mui/material";
import 'swiper/css';
import 'swiper/css/autoplay';
import ItemEventAttractions from "./ItemEventAttractions";

const EventAttractions = ({ data }) => {

    return (
        <Fragment>
            <Swiper
                modules={[Autoplay]}
                autoplay
                spaceBetween={10}
                slidesPerView={5}
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}
                style={{ width: '100%' }}
                breakpoints={{
                    // when window width is >= 640px
                    0: {
                        // width: 640,
                        slidesPerView: 1,
                    },
                    520: {
                        // width: 768,
                        slidesPerView: 2,
                    },
                    720: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                    1080: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                }}
            >
                {data.length ?
                    data.map((value, index) => (
                        <SwiperSlide key={index}>
                            <ItemEventAttractions data={value} />
                        </SwiperSlide>
                    )) :
                    ['', '', '', ''].map((value, index) => (
                        <SwiperSlide key={index}>
                            <Skeleton variant="rectangular" width='100%' height={278} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Fragment>
    );
}

export default EventAttractions;