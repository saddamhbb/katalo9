import React, { useEffect } from "react";
import loadable from '@loadable/component';
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

import { getPopularProducts } from "../../store/actions";

import "./style.scss";

const SectionCategory = loadable(() => import('./SectionCategory'));
const SectionPopularProducts = loadable(() => import('./SectionPopularProducts'));
const SectionAllProducts = loadable(() => import('./SectionAllProducts'), { ssr: false });

const Catalogue = ({ popularProducts, getPopularProducts }) => {
    useEffect(() => {
        getPopularProducts()//Load data popular product on the client
    }, [])

    return (
        <>
            <Helmet>
                <title>Flowers - Product Catalogue</title>
                <meta name="description" content="We are florist expertise in specialised arrangements. We accept urgent orders for same day delivery or pick-up to cater to your special occasions." />
            </Helmet>
            <img className="section-separator-1 page-featured-image" src="/img/flower-shop.jpeg" />
            <section className="container py-2">
                <SectionCategory /> {/* Server Side Rendered */}
                <SectionPopularProducts data={popularProducts} /> {/* Server Side Rendered */}
                <SectionAllProducts /> {/* Client Side Rendered */}
            </section>
        </>
    )
};

const mapStateToProps = ({ popularProducts }) => {
    return {
        popularProducts
    };
};

// Load Data on The Server
const loadData = ({ dispatch }) => dispatch(getPopularProducts()); //Load data popular product on the server;

export default {
    loadData,
    component: connect(mapStateToProps, { getPopularProducts })(Catalogue)
};