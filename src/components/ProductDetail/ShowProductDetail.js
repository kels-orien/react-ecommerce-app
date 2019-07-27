import React from "react";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import ProductImage from "../ProductImage";

const ShowProductDetail = props => {
  return (
    <div>
      <ProductImage images={props.product.imageurl} />
      <ProductDetail product={props.product} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const product = state.productsCollection.find(
    product => product.id === +props.match.params.id
  );

  return {
    product
  };
};
export default connect(
  mapStateToProps,
  null
)(ShowProductDetail);
