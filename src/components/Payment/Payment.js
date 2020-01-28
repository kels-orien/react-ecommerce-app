import React, {useState} from 'react'
import {connect} from "react-redux";
import Visa from "../../assets/images/credit-card/visa.svg"
import MasterCard from "../../assets/images/credit-card/mastercard.svg"
import Paypal from "../../assets/images/credit-card/paypal.svg"
import {Button} from "../ui"
import { useHistory } from "react-router-dom";
import {removeAllProductsFromCart} from "../../Actions"
import CreditCardInput from 'react-credit-card-input';
import {PaymentWrapper, PaymentMain, CreditWrapper, Credit, InputWrapper, CreditInput} from "../ui"


const Payment = (props) => {

  
 
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cvc, setCVC] = useState();
    const [expiry, setExpiry] = useState();
    const [cardnumber, setCardNumber] = useState();
    let history = useHistory();

    const validateName =(name)=> {
        const reg = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
        return reg.test(String(name).trim())
    }

    const validateEmail = (email) => {
        const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        return reg.test(String(email).toLowerCase());
    }
    
    const validateNumber = (number) => {
        const reg = /^(?:4\d{3}|5[1-5]\d{2}|6011|3[47]\d{2})([-\s]?)\d{4}\1\d{4}\1\d{3,4}$/;
        const regTest = reg.test(String(number));
        console.log("validate number: ", regTest);
        regTest === true ? setCardNumber(true) : setCardNumber(false)
        return regTest
    }
    const validateExpiry = (expiry) => {
        const reg = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
        const regTest = reg.test(String(expiry.replace(/\s/g,'')));
        console.log("validate expiry: ", regTest);
        regTest === true ? setExpiry(true) : setExpiry(false);
        return reg.test(String(expiry));
    }
    const validateCVC = (cvc) => {
        const reg = /^\d{3}$/;
        const regTest = reg.test(String(cvc));
        console.log("validate cvc: ", regTest);
        regTest === true ? setCVC(true) : setCVC(false);
        return regTest
    }

    
    
    const handleSubmit = e =>{
      e.preventDefault();   
      props.dispatch(removeAllProductsFromCart())
      history.push('/success')
    }
    

    const handleChange = (e, type) =>{
        const value = e.target.value;
        console.log(type, e.target.value);   //setDisabled(false);

        switch (type) {
            case "number":
             return validateNumber(value);
             
            case "expiry":
            return validateExpiry(value)
            
            case "cvc":
            return validateCVC(value)
            
            default:
                 return false
        }
       
      
    }
    const handleName = (e) => {
        const value = e.target.value;
        let name =validateName(value);   
        console.log("validate name: ", name); 
        setName(!name)  ;   
    }
    
    const handleEmail = (e) => {
            const value = e.target.value;
            let email = validateEmail(value); 
            console.log("validate email: ", email); 
            setEmail(!email)   
    }
    
    return (
        <PaymentWrapper>
                <PaymentMain>
                    <CreditWrapper>
                        <Credit src={Visa}/>
                        <Credit src={Paypal}/>
                        <Credit src={MasterCard}/>
                    </CreditWrapper>  
                    <InputWrapper  onSubmit={handleSubmit}>
                    <CreditInput placeholder="Name" aria-placeholder="name" name="name"  onBlur={e => {handleName(e)}}
                    />
                  {!name ? "": "Please enter valid Name"}
                <CreditInput placeholder="Email" aria-placeholder="Email" name="Email"   onBlur={e => {handleEmail(e)}} 
                    />
                    {!email ? "": "Please enter a Valid email address"}
                     <CreditCardInput
                     
                        onError={({ inputName, err }) => console.log(`credit card input error: ${err}`)}
                        cardCVCInputProps={{
                         onChange: e => {handleChange(e, "cvc")}
                         
                        }}
                      cardExpiryInputProps={{
                           onChange: e => {handleChange(e, "expiry")}
                     }}
                    cardNumberInputProps={{
                         onChange: e => {handleChange(e, "number")}
                    }}
/>
                        <Button type="submit" bcolor="#fed700" height="2.2rem" with="100%" disabled={!name && !email  && cardnumber  && cvc &&  expiry ? false: true } >Pay with Credit Card</Button>
                    </InputWrapper >    
                </PaymentMain>
        </PaymentWrapper> 
    )
}

export default  connect() (Payment)
