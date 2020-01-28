import styled from "styled-components";
import {device} from "./device"



export const ItemWrap = styled.section`
    padding: 2rem;
    display: flex;
    justify-content: space-between;
`
export const Item = styled.div`
    display: flex;
`

export const ItemImageWrapper = styled.img`
    width: 4rem;
    height: 4rem;
`

export const ItemDetailWrapper = styled.div`
    padding-left: 0.5rem;
    
`

export const ItemPrice =  styled.div`
    display: flex;
    flex-direction: row; 
    align-items: stretch; 
    justify-content: flex-end;
`

export const DeleteButton = styled.div`
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

export const NewWrapper = styled.h1`
    font-size: 1rem;
    font-weight: 500;
`

export const PaymentWrapper = styled.section`
    margin: 0 auto;
    width: 40%; 
    ${device.laptop`
    width: 100%;
    margin-top: 2rem;`
}
`

export const PaymentMain = styled.main`
    padding: 1rem;
    background-color: #ebebeb;  
`

export const InputWrapper = styled.form`
    display: block;
    margin: 0 auto;
`

export const Credit= styled.img`
    width: 5rem;
    height: 5rem;
    margin-left: auto;
    margin-right: auto;
`

export const CreditWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

export const CreditInput = styled.input`
    margin-bottom: 1rem;
    width: 99.5%;
    border: 1px solid #ccc;
    border-radius:.2rem;
    height: 2rem;
    outline: 0;
    text-indent: .5rem;
`


export const ImageWrap = styled.div`
    margin-left: 2rem;
    position: relative;
`

export const Image = styled.img`
    height: 20rem;
    width: 20rem;
    object-fit: cover;
    display: block;
`

export const NavBarWrapper = styled.div`   
    ul{
        margin:0;
        padding:0;
        list-style:none;

        li{
            cursor: pointer;
            height: 2rem;
            width: 13rem;
            :hover {
                position:relative;
                ul {
                    left:150px;
                    top:0px;
                    display:block;

                    li {
                        
                        :hover {
                            ul {
                                display:block;
                                left:150px;
                                top:0;
                                li{
                                    :hover {
                                        background-color:rgb(254, 215, 0);
                                    }
                                    a {
                                        
                                    }
                                }
                            }
                        }
                        ul {
                            position:absolute;
                            display:none;
                        }
                    }
                }
            }
            a {
                padding:5px 15px;
                display:inline-block;
                text-decoration:none;
            }
            ul {
                position:absolute;
                display:none;
                li {
                    background-color: white;
                    ul {
                        position:absolute;
                        display:none;
                    }

                    a {
                        display:inline-block;
                        width:120px;
                    }
                }
            }
            :hover {
                position:relative;

                ul{
                    left:150px;
                    top:0px;
                    display:block;
                }
              }
            a{
                padding: 5px 15px;
                display: inline-block;
                text-decoration: none;
                :hover {
                    color: rgb(254, 215, 0);
                }
            }
        }
    }
`

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color:rgb(254, 215, 0);
`

export const HeaderTitle = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
`

export const NavHome =  styled.nav`
    height: 3.1rem;
    color: black;
    display: none
    padding-left: 9rem;
    
    ${device.mobileXL`
    padding-left: 3rem`}

    ${device.tablet`
     display: inline-block;`}
`
export const NavWhite =  styled.nav`
     height: 3.1rem;
     padding-left: 9rem;
     width: 20%;
     color: black;
     background-color: white;
     clip-path: polygon(0 0, 92% 0, 100% 100%, 0% 100%);

     ${device.tablet`
     display: none;`}
`


export const Nav = styled.nav `
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


export const CartWrapper =  styled.main`
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
export const ItemWrapper =  styled.section`
    width: 60%;
    ${device.laptop`
    width: 100%;
    `}
`

export const TotalAmountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const TotalSpan=  styled.span`
    background-color:#ebebeb;
    padding: .25rem;
    font-weight: 700;
`

export const AmountSpan = styled.span`
     background-color:#ebebeb;
     padding: .25rem;
     font-weight: 700;
     margin-right:3.5rem;
`



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
export const CarouselWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
`