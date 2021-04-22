import React, { useState } from "react";
import B from "../../components/B";

import loadable from '@loadable/component'

const LoadA = loadable(() => import('../../components/A'))

const Catalogue = () => {
    return <div>
        <>Hello This is Catalog</>
        <LoadA />
        <B />
    </div>
}

function loadData(store) {
    return null
}

export default {
    loadData,
    component: Catalogue
};