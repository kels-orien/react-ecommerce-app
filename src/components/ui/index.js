import styled from "styled-components";
import {device} from "./device"

export const ContainerWrapper = styled.div`
    background-color: rgb(238,238,238);     
`

export const MainWrapper = styled.div`
    width: 100%;
    display: block;
`

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Card = styled.div`
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    padding: 16px;
    text-align: center;
    height: 17rem;
    width: 15rem;
    background-color: #fff;
    margin-left: 1rem;
    margin-top: 1rem;

`

export const ImageWrapper =styled.img`
    width: 100%;
    height: 100%;
`

export const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;

  ${device.laptopM`
  width: 50vw;`}
`
export const DetailWrapper = styled.div`
  display: flex
   margin-top: 2rem;

   ${device.laptopM`
   display: block;`}
`


export const ThumbsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-left: 2rem;
    margin-top: 2rem; 

    ${device.laptopM`
     display: none;`}
  `
export const ThumbsWrapperHorizontal = styled.div`
    display: none;
    

  ${device.laptopM`
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    margin-bottom: 1rem;
    margin-left: 2rem;
    margin-top: 2rem; `}
`

export const Thumbs = styled.img`
    height: 4rem;
    width: 4rem;
    margin-top: 2rem; 

    ${device.laptopM`
     margin-left: 1rem;`}
`

export const DetailsWrapper = styled.div`
    height: 20rem;
    width: 30rem;
    background-color: white;
    margin-left: 2rem;
    position: relative;

    ${device.tablet`
        margin-left: 2rem;`}
    ${device.laptopM`
     display: block;`}
`
export const FeaturesWrapper = styled.div`
    font-size: 13px;
    line-height: 17px;
    font-weight: 500;
    color: #404040;
    margin-top: 0rem;
    margin-bottom: 2rem;;
`

export const Title =  styled.h1`
    font-size: 1rem;
    font-weight: 700;
`

export const FeatureTitle =  styled.h1`
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
`

export const List = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
`
export const Button = styled.button.attrs(props => ({
}))`
    background-color:${props => props.bcolor};
    text-decoration: none;
    display: inline-block;
    border-radius: 0.25rem;
    position: relative;
    font-weight: 700;
    font-size: .7rem;
    outline: 0;
    width: ${props => props.with};
    height: ${props => props.height};
    border: none;
    cursor: pointer;
    padding: ${props => props.padding};
`
export const Quantity = styled.div`
    margin-top: 1rem;
    display: flex;
`
export const Select = styled.div`
    margin-left: 1rem;
    margin-top: -0.2rem;
`

export const Qty = styled.input`
    width: 2.2rem;
    height: 1.5rem;
    text-align: center;
    border: none;
    font-family: 'Museo Sans Cyrl W03 300';
    font-weight: 400;
    color: #333
`

export const QtyInput = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    background-color: #ebebeb;
    border: none;
    border-radius: 0.15rem;
    font-weight: 300;
    color: #333;
    cursor: pointer;
`

export const ButtonWrapper = styled.div`
    margin-right: 1rem;
`
export const BuyWrapper =  styled.div`
    display: flex;
    margin-top: 1rem;
`
export const Old = styled.div`
    text-decoration: line-through;
    font-size: 0.7rem;
    color: #8b8f90;
    margin-left: 0.2rem;
    padding-top: .2rem;`


export const pagination = styled.div`
    
`

export const SuccessWrapper = styled.main`
    margin: 0 auto;
    width: 80vh;
`

export const SuccessTextWrapper = styled.div`
    text-align:center;
    margin: 1rem 2rem;
    margin-top: 33%;

`

export const SuccessButtonWrapper = styled.div`
    text-align: center;
    margin: 1rem 2rem;
`
