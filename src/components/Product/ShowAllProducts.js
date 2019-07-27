import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";

class ShowAllProducts extends Component {
  renderAllProducts = () => {
    const { productsCollection } = this.props;

    return productsCollection.map(product => {
      return <Product id={product.id} key={product.id} product={product} />;
    });
  };
  render() {
    return <div>{this.renderAllProducts()}</div>;
  }
}

function mapStateToProps({ productsCollection }) {
  return {
    productsCollection
  };
}

export default connect(mapStateToProps)(ShowAllProducts);
