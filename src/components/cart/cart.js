import React from 'react'
import {connect} from "react-redux";
import CartItem from "./CartItem"
import styled from "styled-components"
import {formatPrice} from "../../utils/formatPrice"
import {device} from "../ui/device"
import "../../../src/index.css"
import Payment from "../Payment"



const CartWrapper =  styled.main`
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    width: 80vw;
    ${device.laptop`
    display: block;`}
    ${device.tabletM`
    width: 100%;
    `}
`
const ItemWrapper =  styled.section`
    width: 60%;
    ${device.laptop`
    width: 100%;
    `}
`

const TotalAmountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const TotalSpan=  styled.span`
    background-color:#ebebeb;
    padding: .25rem;
    font-weight: 700;
`

const AmountSpan = styled.span`
     background-color:#ebebeb;
     padding: .25rem;
     font-weight: 700;
     margin-right:3.5rem;
`




const Cart = (props) => {
   
    return (
        <CartWrapper>
            <ItemWrapper>
                    {props.cartItemCount ? props.cartItems.map(cart => (
                             <CartItem {...cart} image={cart.imageurl[0]} />
                        )) : <h1>There is no product in your cart</h1> }
                        {props.cartItemCount ? (<TotalAmountWrapper>
                            <TotalSpan>Total:</TotalSpan><AmountSpan>&#8358;{formatPrice(props.totalPrice)}</AmountSpan></TotalAmountWrapper>):(<div/>)}
            </ItemWrapper>
                
            {props.cartItemCount ? ( <Payment/>
            ):(<div/>)}         
        </CartWrapper>
    )
}

const mapStateToProps =  state => {
    return {
        cartItems: state.productsCollection.cart,
        cartItemCount: state.productsCollection.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.productsCollection.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)        

    }
}

export default  connect(mapStateToProps, null)(Cart);
