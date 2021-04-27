import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const SectionLightBox = ({ data = {} }) => {
    if (!!data.length) {
        return (
            <SRLWrapper>
                {
                    data.map(({ url }, i) => {
                        return (
                            <img key={i} className="d-none" src={url} />
                        );
                    })
                }
            </SRLWrapper>
        )
    } else {
        return null
    }
};

export default SectionLightBox;