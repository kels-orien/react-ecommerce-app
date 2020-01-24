import React from 'react'
import styled from "styled-components";
import {device} from "../ui/device"

const NavBarWrapper = styled.div`   
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
const Navbar = () => {
    return (
        <NavBarWrapper id="menuwrapper">
            <ul>
                    <li><a href="#">Laptops</a>
                        <ul>
                            <li><a href="#">Apple</a>
                                <ul>
                                    <li><a href="#">Sub Product 1</a></li>
                                    <li><a href="#">Sub Product 2</a></li>
                                    <li><a href="#">Sub Product 3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">HP</a></li>
                            <li><a href="#">Dell</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Mobile Phones</a>
                        <ul>
                            <li><a href="#">Android</a>
                                <ul>
                                    <li><a href="#">Sub Product 1</a></li>
                                    <li><a href="#">Sub Product 2</a></li>
                                    <li><a href="#">Sub Product 3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">IOS</a></li>
                            <li><a href="#">Basic Phones</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Cameras</a>
                        <ul>
                            <li><a href="#">Canon</a>
                                <ul>
                                    <li><a href="#">Sub Product 1</a></li>
                                    <li><a href="#">Sub Product 2</a></li>
                                    <li><a href="#">Sub Product 3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Nixon</a></li>
                            <li><a href="#">Generic</a></li>
                        </ul>
                    </li>
                </ul>
            
        </NavBarWrapper>
    )
}

export default Navbar
