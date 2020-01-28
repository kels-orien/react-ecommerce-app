import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom';
import {HeaderWrapper, HeaderTitle, NavHome, NavWhite, Nav} from "../ui"


const Header = ({cartLength}) => {
    return (
        <HeaderWrapper>
            <NavWhite><HeaderTitle><NavLink to="/">E-Shop</NavLink></HeaderTitle></NavWhite>
            <NavHome><NavLink to={"/"}><i className="ion-md-home"/></NavLink></NavHome>
            <Nav>
                <ul>
                    <li><NavLink to={"/"}>Mobile Phones</NavLink></li>
                    <li><NavLink to={"/"}>Laptops</NavLink></li>
                    <li><NavLink to={"/"}>Head Phones</NavLink></li>
                    <li><NavLink to={"/cart"}><i className="ion-md-cart"/> {cartLength ? `(${cartLength})`: ''}</NavLink></li>
                </ul> 
            </Nav>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {

    console.log("cart", state);
    return {
        cartLength: state.productsCollection.cart.length
    }
}

export default connect(mapStateToProps, null)(Header);
