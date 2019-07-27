import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ShowAllProducts from "../Product/";
import ShowProductDetail from "../ProductDetail";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ShowAllProducts} />
          <Route exact path="/product/:id" component={ShowProductDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
