import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ShowAllProducts from "../Product/";
import ShowProductDetail from "../ProductDetail";
import Cart from "../cart";
import Success from "../Success"
import Slider from "../Slider"
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Header from "../Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class App extends Component {
  render() {
    return (
        <Router>\
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
            <Route exact path={"/Slider"} component={Slider} />
         </Switch>
        </React.Fragment>
        
        </Router>
    );
  }
}

export default App;
