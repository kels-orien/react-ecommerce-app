import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, product }) => (
  <Link to={`/product/${id}`}>
    <h1>{product.name}</h1>
  </Link>
);

export default Product;
