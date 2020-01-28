import React from 'react'
import { Carousel } from "react-responsive-carousel";
import {CarouselWrapper} from "../ui"



export default () => (   

    <CarouselWrapper>
        <Carousel autoPlay>
         <div>
             <img src="https://res.cloudinary.com/dofiasjpi/image/upload/v1572901161/e-shop/Slider/fastlane_DESKTOP2.jpg"/>
         </div>
        
        <div>
            <img src="https://res.cloudinary.com/dofiasjpi/image/upload/v1572901171/e-shop/Slider/ng_w33_s5_samsung.jpg"/>
        </div>
        
        <div>
            <img src="https://res.cloudinary.com/dofiasjpi/image/upload/v1572901148/e-shop/Slider/111imgpsh_fullsize_anim-_1.jpg"/>
        </div>     
     </Carousel>


    </CarouselWrapper>
     
)
