import React from 'react'
import { connect } from 'react-redux'
import styled from "styled-components";
import {device} from "../ui/device"
import {NavLink} from 'react-router-dom';


const HeaderWrapper = styled.header`
    width: 100%;
    background-color:rgb(254, 215, 0);
`

const HeaderTitle = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
`

const NavHome =  styled.nav`
    height: 3.1rem;
    color: black;
    display: none
    padding-left: 9rem;
    
    ${device.mobileXL`
    padding-left: 3rem`}

    ${device.tablet`
     display: inline-block;`}
`
const NavWhite =  styled.nav`
     height: 3.1rem;
     padding-left: 9rem;
     width: 20%;
     color: black;
     background-color: white;
     clip-path: polygon(0 0, 92% 0, 100% 100%, 0% 100%);

     ${device.tablet`
     display: none;`}
`


const Nav = styled.nav `
    height: 2.7rem;
    padding-left: 9rem;

    ${device.tablet`
    padding-left: 3rem;`}

    ul{

        li{
            display: inline-block;
             white-space: nowrap;
            list-style: none;

            a{
                font-size: .65rem;
                font-weight: 700;
                line-height: 2.5rem;
            }

            :not(:first-child) {
                margin-left: 2.5rem;

                ${device.mobileXL`
                    margin-left: 0rem; 
                    padding-left: 1rem;`}
            }
        } 
    }      
`

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
