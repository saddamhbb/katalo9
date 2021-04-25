import React from "react"
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../utilities/string';

SwiperCore.use([Navigation]);

const Card = ({ title, price, images }) => {
    return (
        <div className="card">
            <div>
                {!!images ? <Swiper
                    navigation
                    spaceBetween={15}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        images.map(({ priority, url }, i) => {
                            // using i as key due to the index of the array is not editable
                            return <SwiperSlide key={i}><img src={url} /></SwiperSlide>
                        })
                    }
                </Swiper> : <img src={"https://placeholder.com/270x312"} />
                }
            </div>
            <div className="p-1">
                <div className="text-center">
                    <h3 className="text-ellipsis">{title}</h3>
                </div>
                <div className="text-center mb-1">
                    <span>{formatPrice(price)}</span>
                </div>
                <button className="w-100 btn btn-primary text-uppercase fw-bold">Add to Cart</button>
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

