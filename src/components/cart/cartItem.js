import React from 'react'
import {connect} from "react-redux";
import {formatPrice} from "../../utils/formatPrice"
import {removeProductFromCart} from "../../Actions"
import {ItemWrap, Item, ItemImageWrapper,  ItemDetailWrapper, ItemPrice, DeleteButton } from "../ui"




const CartItem = (
    {
        id,
        name,
        price,
        quantity,
        image,
        dispatch
    }
) => {
  
    const removeItem = () => {
        dispatch(removeProductFromCart(id));
    };
    return (
        <ItemWrap>
            <Item>
                <ItemImageWrapper src={image} />
                <ItemDetailWrapper>{name}</ItemDetailWrapper>
            </Item>
            
          {quantity}<ItemPrice>&#8358;{formatPrice(price)}</ItemPrice><DeleteButton title="Remove" onClick={removeItem}>x</DeleteButton>

        </ItemWrap>

    )
}

export default connect()(CartItem); 
