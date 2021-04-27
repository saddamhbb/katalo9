import React, { useState } from "react";
import SwiperCore, { Thumbs, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLightbox } from "simple-react-lightbox";

import { formatPrice } from "../../../utilities/string";
import Loading from "../../../components/Loading";

SwiperCore.use([Thumbs, Navigation]);

const SectionDetail = ({ data = {} }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { openLightbox, closeLightbox } = useLightbox();

    return (
        <section>
            <div className="d-flex mx-n-1 flex-wrap section-separator-1">
                <div className="col-12 col-d-4 px-1 position-relative mb-3">
                    <button
                        className="position-absolute top-0 border-radius-50 bg-white pd-btn-lightbox"
                        onClick={() => openLightbox()}
                    >
                        <img src="/img/search.svg" className="pd-btn-lightbox__img" />
                    </button>
                    {!!data.images ? <Swiper
                        navigation
                        spaceBetween={15}
                        slidesPerView={1}
                        thumbs={{ swiper: thumbsSwiper }}
                    >
                        {
                            data.images.map(({ url }, i) => {
                                // using i as key due to the index of the array is not editable
                                return (
                                    <SwiperSlide key={i}>
                                        <div className="text-center">
                                            <img src={url} />
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper> : <div className="text-center"><Loading /></div>
                    }
                    <div className="mb-1"></div>
                    {!!data.images ? <Swiper
                        spaceBetween={15}
                        slidesPerView={3}
                        onSwiper={setThumbsSwiper}
                        watchSlidesVisibility
                        watchSlidesProgress
                    >
                        {
                            data.images.map(({ url }, i) => {
                                // using i as key due to the index of the array is not editable
                                return (
                                    <SwiperSlide key={i}>
                                        <div className="text-center">
                                            <img src={url} />
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper> : null
                    }
                </div>
                <div className="col-12 col-d-4 px-1 mb-3">
                    <div className="pd-mid-section">
                        <h1>{data.title}</h1>
                        <div className="fs-2 fw-bold mb-3">{data.price ? formatPrice(data.price) : <div className="text-center"><Loading /></div>}</div>
                        {data.description}
                    </div>
                </div>
                <div className="col-12 col-d-4 px-1">
                    {
                        data.stock
                            ? (
                                <div className="pd-end-section border-radius-1">
                                    <div className="fs-1 mb-2">
                                        <input className="me-1 form-field pd-end-section__jumlah" type="number" min={0} max={data.stock} placeholder="Jumlah" />
                                        Stock: {data.stock}
                                    </div>
                                    <div className="fs-1 mb-2">
                                        <textarea className="form-field" placeholder="Catatan">
                                        </textarea>
                                    </div>
                                    <button className="btn pd-btn-action me-1">Buy Now</button>
                                    <button className="btn btn-primary pd-btn-action">Add to Cart</button>
                                </div>
                            )
                            : (<div className="text-center"><Loading /></div>)
                    }
                </div>
            </div>
        </section>
    )
};

export default SectionDetail;