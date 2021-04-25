import React from "react";


const SectionAllProducts = () => {

    if (!!products.length) {
        return (
            <section className="section-separator-2">
                <h2 className="fm-title fs-3 text-center">All <span className="text-primary">Products</span></h2>
                <div className="d-flex mx-n-1 flex-wrap">
                    {
                        products.map(product => {
                            return (
                                <div key={product.id} className="col-12 col-d-3 px-1 mb-2">
                                    <Card title={product.title} price={product.price} images={product.images} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    } else {
        return null
    }

}