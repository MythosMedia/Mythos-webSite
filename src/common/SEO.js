import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Mythos Media | {title}</title>
            <meta name="description" content="Mythos Media is one of North America's leaders in industry-specialized digital marketing. At Mythos Media, we understand that every industry is unique. Choose experts who truly understand your business." />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="keywords" content="Mythos Media, digital marketing, mythos media , mythosmedia , industry-specialized marketing, brand transformation, North America marketing leaders" />
            <meta name="author" content="Mythos Media" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Language" content="en-US" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;