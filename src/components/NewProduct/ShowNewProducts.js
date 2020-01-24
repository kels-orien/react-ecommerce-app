import React, { Component } from 'react'

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

class ShowNewProducts extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ShowNewProducts
