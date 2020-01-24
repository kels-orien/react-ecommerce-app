import React from "react";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";


const ShowProductDetail = props => {
  return (
    <div>
      <ProductDetail product={props.product} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const product = state.productsCollection.products.find(
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
