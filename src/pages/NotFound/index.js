import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center">
            <Helmet>
                <title>Flowers - Product Catalogue</title>
                <meta name="description" content="We are florist expertise in specialised arrangements. We accept urgent orders for same day delivery or pick-up to cater to your special occasions." />
            </Helmet>
            <div className="section-separator-1"></div>
            <h1 className="fm-title">PAGE NOT FOUND</h1>
            <p>Error Status Code 404</p>
            <p className="mb-3">
                Server cannot find the file you requested. The Page has either been moved or deleted, <br />
                or you entered the wrong URL or document name. Look at the URL. If a word looks misspelled, then correct it and try it again.
            </p>
            <Link className="btn btn-primary" to="/"> Homepage </Link>
        </div>
    )
};

const loadData = (store) => {
    return null
};

export default {
    loadData,
    component: NotFound
};