import React, { useEffect, useState } from "react";
import loadable from '@loadable/component';
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import API from "../../utilities/api";
import "./style.scss";

const SectionRelatedProducts = loadable(() => import('./SectionRelatedProducts'), { ssr: false });
const SectionLightBox = loadable(() => import('./SectionLightBox'), { ssr: false });
const SectionDetail = loadable(() => import('./SectionDetail'), { ssr: false });
const Loading = loadable(() => import('../../components/Loading'), { ssr: false });

const ProductDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        // This page is fully client side, due to we only get data on client side.
        API.getProduct(id).then(res => setData(res.data));
    }, []);

    return (
        <>
            <Helmet>
                <title>{data.title}</title>
                <meta name="description" content={data.desc} />
            </Helmet>
            <section className="container py-2">
                <SectionDetail data={data} />
                <SectionRelatedProducts />
                <SectionLightBox data={data.images} />
            </section>
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