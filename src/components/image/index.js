// import React from 'react'
// import Img from "next/image";

// function Image({
//     src,
//     alt = "",
//     width = 600,
//     height = 400,
//     priority = false,
//     className = ' ',
//     ...rest

// }) {
//     return (
//         <Img
//             src={src}
//             width={width}
//             height={height}
//             loading="lazy"
//             alt={alt}
//             className={"img-fluid " + className}
//             // placeholder="blur"
//             // blurDataURL="/assets/placeholder.webp"
//             {...rest}
//         />
//     )
// }

// export default Image


import React from "react";
import NextImage from "next/image";

function Image({
    src,
    alt = "jhjkjknuju",
    width = 600,
    height = 400,
    priority = false,
    className = "",
    fill = false, 
    ...rest
}) {
    return (
        <NextImage
            src={src}
            alt={alt}
            width={!fill ? width : undefined}
            height={!fill ? height : undefined}
            fill={fill}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className={`img-fluid ${className}`}
            // placeholder="blur"
            // blurDataURL="/assets/placeholder.webp"
            {...rest}
        />
    );
}

export default Image;
