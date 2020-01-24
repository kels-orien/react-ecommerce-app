import React from 'react'
import {connect} from "react-redux";
import styled from "styled-components"
import {formatPrice} from "../../utils/formatPrice"
import {removeProductFromCart} from "../../Actions"



const ItemWrapper = styled.section`
    padding: 2rem;
    display: flex;
    justify-content: space-between;
`
const Item = styled.div`
    display: flex;
`

const ItemImageWrapper = styled.img`
    width: 4rem;
    height: 4rem;
`

const ItemDetailWrapper = styled.div`
    padding-left: 0.5rem;
    
`

const ItemPrice =  styled.div`
    display: flex;
    flex-direction: row; 
    align-items: stretch; 
    justify-content: flex-end;
`

const DeleteButton = styled.div`
    text-decoration: none;
    display: inline-block;
    border-radius: 0.2rem;
    position: relative;
    font-weight: 700;
    font-size: 1rem;
    outline: 0;
    background-color: #fff;
    border: none;
    cursor: pointer;
    height: 1rem;
    width: 2rem;
    color: grey;
`

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
        <ItemWrapper>
            <Item>
                <ItemImageWrapper src={image} />
                <ItemDetailWrapper>{name}</ItemDetailWrapper>
            </Item>
            
          {quantity}<ItemPrice>&#8358;{formatPrice(price)}</ItemPrice><DeleteButton title="Remove" onClick={removeItem}>x</DeleteButton>

        </ItemWrapper>

    )
}

export default connect()(CartItem); 
