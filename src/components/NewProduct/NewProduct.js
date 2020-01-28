import React from 'react'
import ProductThumbnail from "../ProductThumbnail"
import styled from "styled-components"
import {formatPrice} from "../../utils/formatPrice"
import {NewWrapper} from "../ui"






const NewProduct = ({id, product}) => {
    return (
        <div>
            <ProductThumbnail imageurl={product.imageurl}/>
            <NewWrapper data-testid="text-wrapper">
                    {product.name} 
            </NewWrapper>
           <span  data-testid="text-price">&#8358;{formatPrice(product.price)}</span>
        </div>
    )
}

export default NewProduct
