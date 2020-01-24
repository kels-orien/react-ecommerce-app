import React from 'react'
import ProductThumbnail from "../ProductThumbnail"
import styled from "styled-components"
import {formatPrice} from "../../utils/formatPrice"

const Wrapper = styled.h1`
    font-size: 1rem;
    font-weight: 500;
`



const NewProduct = ({id, product}) => {
    return (
        <div>
            <ProductThumbnail imageurl={product.imageurl}/>
            <Wrapper data-testid="text-wrapper">
                    {product.name} 
            </Wrapper>
           <span  data-testid="text-price">&#8358;{formatPrice(product.price)}</span>
        </div>
    )
}

export default NewProduct
