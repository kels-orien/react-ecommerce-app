import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../Pagination"
import {paginationPipe} from "../Pagination/paginationFilter"
import NavBar from "../Navbar";
import Slider from "../Slider"
import NewProduct from "../NewProduct"

import {ContainerWrapper, MainWrapper, ProductWrapper, Card} from "../ui"


class ShowAllProducts extends Component {
  state = {
    perPage: 12,
    currentPage: 1,
    pagesToShow: 3,
    gridValue: 3
};
onPrev = () => {
  const updatedState = {...this.state};
  updatedState.currentPage = this.state.currentPage - 1;
  this.setState(updatedState);
};

onNext = () => {
  this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1
  });
};

goToPage = (n) => {
  this.setState({
      ...this.state,
      currentPage: n
  });
};


  
  render() {
    return <ContainerWrapper>
   
   <MainWrapper>
    <NavBar/>
      <Slider/>

        <ProductWrapper>
        {paginationPipe(this.props.productsCollection, this.state).map(product =>{
         
            return<Card ><Link to={`/product/${product.id}`}><NewProduct id={product.id} key={product.id} product={product} /></Link></Card>
        })}
        </ProductWrapper>
    </MainWrapper>
    
    
    <Pagination
        totalItemsCount={this.props.productsCollection.length}
        currentPage={this.state.currentPage}
        perPage={this.state.perPage}
        pagesToShow={this.state.pagesToShow}
        onGoToPage={this.goToPage}
        onPrevPage={this.onPrev}
       onNextPage={this.onNext}
    />
</ContainerWrapper>;
  }
}

function mapStateToProps({ productsCollection }) {
  return {
    productsCollection: productsCollection
  };
}

export default connect(mapStateToProps, null)(ShowAllProducts);
