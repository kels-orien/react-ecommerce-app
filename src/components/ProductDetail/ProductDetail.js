import React from "react";
import { connect } from "react-redux";

const ProductDetail = props => {
  const {
    id,
    name,
    brand,
    price,
    cpu,
    camera,
    screen,
    battery,
    memory,
    OS,
    sim,
    imageurl,
    sourceurl,
    description,
    other
  } = props.product;

  return (
    <div>
      <p>
        {name}
        {brand}
        {price}
        {cpu}
        {camera}
        {screen}
        {battery}
        {description}
        {other}
      </p>
      <button>Add To Cart</button>
    </div>
  );
};

export default connect()(ProductDetail);
