import React from "react";

const SectionCategory = () => {
    return (
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
    );
};

export default SectionCategory;