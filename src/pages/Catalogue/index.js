import React, { useState } from "react";

const Catalogue = () => {
    return (
        <div className="container py-2">
            <div className="d-flex mx-n-1 flex-wrap mb-2">
                <div className="col-12 col-d-8 px-1 mb-2 mb-d-0">
                    <div className="mb-2">
                        <img src="/img/products/potted-plant/potted-plant-cat.png" />
                        <h2><a href="#">Potted Plant</a></h2>
                    </div>

                    <div className="d-flex mx-n-1 flex-wrap">
                        <div className="col-12 col-d-6 px-1 mb-2 mb-d-0">
                            <div>
                                <img src="/img/products/red-rose/red-rose-cat.jpeg" />
                                <h2><a href="#">Red Rose</a></h2>
                            </div>
                        </div>
                        <div className="col-12 col-d-6 px-1">
                            <div>
                                <img src="/img/products/roses-suprise/roses-suprise-cat.jpeg" />
                                <h2><a href="#">Roses Suprise</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-d-4 px-1">
                    <div className="mb-2">
                        <img src="/img/products/pink-flower/pink-flower-cat.jpeg" />
                        <h2><a href="#">Pink Flower</a></h2>
                    </div>
                    <div>
                        <img src="/img/products/flower-tree/flower-tree-cat.jpeg" />
                        <h2><a href="#">Flower Tree</a></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

function loadData(store) {
    return null
}

export default {
    loadData,
    component: Catalogue
};