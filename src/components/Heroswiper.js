import React, { useState } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation]);
function Heroswiper() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
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
                    navigation={true}
                    // modules={[Controller]}
                    // onSwiper={setFirstSwiper}
                    // controller={{ control: secondSwiper }}
                    pagination={{ clickable: false }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* <div class="swiper-pagination">
                     <div class="swiper-button-prev">Prev</div>
                    <div class="swiper-button-next">Next</div>
                    </div> */}


                </Swiper>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    // modules={[Controller]}
                    // onSwiper={setSecondSwiper}
                    // controller={{ control: firstSwiper }}
                    pagination={{ clickable: false }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="card" style={{ width: "18rem" }}>
                        <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/324-400x500.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </SwiperSlide>


                </Swiper>


            </div>
        </>
    )
}

export default Heroswiper
