import React from "react";
import PropTypes from 'prop-types';

import Card from "../../../components/Card";

const SectionPopularProducts = ({ data }) => {
    if (!!data.length) {
        return (
            <section className="section-separator-2">
                <h2 className="fm-title fs-3 text-center">Popular <span className="text-primary">Products</span></h2>
                <div className="d-flex mx-n-1 flex-wrap">
                    {
                        data.map(product => {
                            return (
                                <div key={product.id} className="product-grid col-6 col-s-4 col-md-3 px-1 mb-2">
                                    <Card title={product.title} price={product.price} images={product.images} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    } else {
        return null
    }
};

SectionPopularProducts.propTypes = {
    data: PropTypes.array.isRequired
};

export default SectionPopularProducts;