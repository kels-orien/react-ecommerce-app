import React from 'react'
import {ImageWrapper} from "../ui";


const ProductThumbnail = ({imageurl}) => {
    return (
      
            <ImageWrapper src={imageurl[0]}/>
       
    )
}

export default ProductThumbnail
