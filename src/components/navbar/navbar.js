import React from 'react'
import styled from "styled-components";
import {NavBarWrapper } from "../ui"


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
