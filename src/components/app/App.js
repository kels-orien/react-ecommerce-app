import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ShowAllProducts from "../Product/ShowAllProducts";
import ShowProductDetail from "../ProductDetail";
import Cart from "../Cart/Cart";
import Success from "../Success/Success"
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class App extends Component {
  render() {
    return (
        <Router>
        <React.Fragment>
        <Header/>
         <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/products'}/>
                    }}/>
            <Route exact path={'/products'} component={ShowAllProducts} />
            <Route exact path={"/product/:id"} component={ShowProductDetail} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/Success"} component={Success} />
         </Switch>
        </React.Fragment>
        
        </Router>
    );
  }
}

export default App;
