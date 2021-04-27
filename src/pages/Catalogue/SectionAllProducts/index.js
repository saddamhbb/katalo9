import React, { useEffect, useState } from "react";
import API from "../../../utilities/api";
import Card from "../../../components/Card";


const SectionAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        API.getProducts()
            .then(res => {
                setProducts(res.data)
            })
            .catch(e => {
                console.error(e)
                // Define a function to handle exception
            });
    }, []);

    if (!!products.length) {
        return (
            <section className="section-separator-2">
                <h2 className="fm-title fs-3 text-center">All <span className="text-primary">Products</span></h2>
                <div className="d-flex mx-n-1 flex-wrap">
                    {
                        products.map(product => {
                            return (
                                <div key={product.id} className="product-grid col-6 col-s-4 col-md-3 px-1 mb-2">
                                    <Card id={product.id} title={product.title} price={product.price} images={product.images} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    } else {
        return null;
    }
};

export default SectionAllProducts;