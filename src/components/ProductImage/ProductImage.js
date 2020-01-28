import React from "react";
import styled from "styled-components";
import {ImageWrap, Image} from "../ui"



const ProductImage = props => {
  return <ImageWrap><Image src={props.image}/></ImageWrap>;
};

export default ProductImage;
