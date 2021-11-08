import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'


function Heroswiper() {
    return (
        <>
            <div className="container mt-4 mb-4 h-50 w-75">
                <div className="">
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    // navigation
                    pagination={{ clickable: false }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    <SwiperSlide><img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/236-420x480.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/236-420x480.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/616-400x500.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/236-420x480.jpg" alt="" /></SwiperSlide>

                    {/* <div className="flex-row d-flex">
                        
                    <button className="btn btn-primary swiper-button-next"></button>
                <button className="btn btn-primary swiper-button-prev">Prev</button>
                    </div> */}
                </Swiper>

            </div>
        </>
    )
}

export default Heroswiper
