import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Card from "../../components/Card";
import API from "../../utilities/api";
import "./style.scss";

const Catalogue = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        API.getProduct().then(res => {
            setProducts(res.data)
        })
    }, [])

    return (
        <>
            <Helmet>
                <title>Flowers - Product Catalogue</title>
                <meta name="description" content="We are florist expertise in specialised arrangements. We accept urgent orders for same day delivery or pick-up to cater to your special occasions." />
            </Helmet>
            <img className="section-separator-1 page-featured-image" src="/img/flower-shop.jpeg" />
            <div className="container py-2">
                <section className="section-separator-2">
                    <h2 className="fm-title fs-3 text-center">Popular <span className="text-primary">Categories</span></h2>
                    <div className="d-flex mx-n-1 flex-wrap">
                        <div className="col-12 col-d-8 px-1 mb-2 mb-d-0">
                            <div className="mb-2 position-relative">
                                <img src="/img/products/potted-plant/potted-plant-cat.png" />
                                <h3 className="position-absolute w-100 bottom-0 left-0 px-1 text-center">
                                    <a className="btn bg-white fs-1 border-radius-0 text-hover-primary" href="#">Potted Plant</a>
                                </h3>
                            </div>

                            <div className="d-flex mx-n-1 flex-wrap">
                                <div className="col-12 col-d-6 px-1 mb-2 mb-d-0">
                                    <div className="position-relative">
                                        <img src="/img/products/red-rose/red-rose-cat.jpeg" />
                                        <h3 className="position-absolute w-100 bottom-0 left-0 px-1 text-center"><a className="btn bg-white fs-1 border-radius-0 text-hover-primary" href="#">Red Rose</a></h3>
                                    </div>
                                </div>
                                <div className="col-12 col-d-6 px-1">
                                    <div className="position-relative">
                                        <img src="/img/products/roses-suprise/roses-suprise-cat.jpeg" />
                                        <h3 className="position-absolute w-100 bottom-0 left-0 px-1 text-center"><a className="btn bg-white fs-1 border-radius-0 text-hover-primary" href="#">Roses Suprise</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-d-4 px-1">
                            <div className="mb-2 position-relative">
                                <img src="/img/products/pink-flower/pink-flower-cat.jpeg" />
                                <h3 className="position-absolute w-100 bottom-0 left-0 px-1 text-center"><a className="btn bg-white fs-1 border-radius-0 text-hover-primary" href="#">Pink Flower</a></h3>
                            </div>
                            <div className="position-relative">
                                <img src="/img/products/flower-tree/flower-tree-cat.jpeg" />
                                <h3 className="position-absolute w-100 bottom-0 left-0 px-1 text-center"><a className="btn bg-white fs-1 border-radius-0 text-hover-primary" href="#">Flower Tree</a></h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-separator-2">
                    <h2 className="fm-title fs-3 text-center">All <span className="text-primary">Products</span></h2>
                    <div className="d-flex mx-n-1 flex-wrap">
                        {
                            !!products.length ?
                                products.map(product => {
                                    return (
                                        <div key={product.id} className="col-12 col-d-3 px-1 mb-2">
                                            <Card title={product.title} price={product.price} images={product.images} />
                                        </div>
                                    )
                                })
                                : "No Products Available"
                        }
                    </div>
                </section>
            </div>
        </>
    )
};

const loadData = (store) => {
    return null
};

export default {
    loadData,
    component: Catalogue
};