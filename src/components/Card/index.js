import React from "react"
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../utilities/string';

SwiperCore.use([Navigation]);

const Card = ({ title, price, images }) => {
    return (
        <div className="card">
            <div className="text-center">
                {!!images ? <Swiper
                    navigation
                    spaceBetween={15}
                    slidesPerView={1}
                >
                    {
                        images.map(({ priority, url }, i) => {
                            // using i as key due to the index of the array is not editable
                            return (
                                <SwiperSlide key={i}>
                                    <a className="d-block" href="/detail-product-1"><img src={url} /></a>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper> : <img src={"https://via.placeholder.com/270x312"} />
                }
            </div>
            <div className="p-1">
                <a className="d-block" href="/detail-product-1">
                    <div className="text-center">
                        <h3 className="text-ellipsis">{title}</h3>
                    </div>
                    <div className="text-center mb-1">
                        <span>{formatPrice(price)}</span>
                    </div>
                </a>
                <button onClick={() => console.log("Clicked")} className="w-100 btn btn-primary text-uppercase fw-bold">Add to Cart</button>
            </div>
        </div>
    )
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array
};

Card.defaultProps = {
    images: []
};

export default Card;

