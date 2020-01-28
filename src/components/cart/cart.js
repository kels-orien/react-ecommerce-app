import React from 'react'
import {connect} from "react-redux";
import CartItem from "./cartItem"
import {formatPrice} from "../../utils/formatPrice"
import {CartWrapper, ItemWrapper, TotalAmountWrapper, TotalSpan, AmountSpan} from "../ui"
import Payment from "../Payment"


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
