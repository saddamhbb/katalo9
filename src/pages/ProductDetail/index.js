import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Card from "../../components/Card";
import API from "../../utilities/api";
import "./style.scss";

const ProductDetail = () => {
    return (
        <>
            <Helmet>
                <title>Flowers - Product Catalogue</title>
                <meta name="description" content="We are florist expertise in specialised arrangements. We accept urgent orders for same day delivery or pick-up to cater to your special occasions." />
            </Helmet>
            <div className="section-separator-1"></div>
            <div className="text-center">
                <h1>Product Detail Page</h1>
            </div>
        </>
    )
};

const loadData = (store) => {
    return null
};

export default {
    loadData,
    component: ProductDetail
};