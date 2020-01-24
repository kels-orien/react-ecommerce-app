import React from "react";
import styled from "styled-components";


const ImageWrapper = styled.div`
    margin-left: 2rem;
    position: relative;
`

const Image = styled.img`
    height: 20rem;
    width: 20rem;
    object-fit: cover;
    display: block;
`

const ProductImage = props => {
  return <ImageWrapper><Image src={props.image}/></ImageWrapper>;
};

export default ProductImage;
