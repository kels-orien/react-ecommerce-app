import React from 'react'
import {Link} from "react-router-dom";
import {Button, SuccessWrapper, SuccessText, SuccessTextWrapper, SuccessButtonWrapper} from "../ui"



const Success = () => {
    return (
        <SuccessWrapper>
            <SuccessTextWrapper>
                Success!
                Thank you for your purchase. You'll be receiving your items in 4 business days.
                <SuccessButtonWrapper>
           <Link to='/'><Button bcolor="#fed700"  padding="0.7rem 4rem">Home</Button></Link>
           </SuccessButtonWrapper>
            </SuccessTextWrapper>
          
            
        </SuccessWrapper>
    )
}

export default Success
