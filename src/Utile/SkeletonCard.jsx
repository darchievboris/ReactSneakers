import React from 'react';
import ContentLoader from "react-content-loader"

const SkeletonCard = ({props}) => {
    return (
        <ContentLoader
            speed={2}
            width={220}
            height={460}
            viewBox="0 0 220 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="144" cy="193" r="15"/>
            <rect x="0" y="134" rx="2" ry="2" width="158" height="10"/>
            <rect x="0" y="157" rx="2" ry="2" width="158" height="10"/>
            <rect x="0" y="6" rx="2" ry="2" width="133" height="112"/>
            <rect x="0" y="176" rx="0" ry="0" width="70" height="16"/>
            <rect x="0" y="198" rx="0" ry="0" width="70" height="16"/>
        </ContentLoader>

    )
};
export default SkeletonCard;
