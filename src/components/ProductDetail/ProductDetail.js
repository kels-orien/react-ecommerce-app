import React from "react";
import { connect } from "react-redux";
import Phone from "../Phone/Phone";
import Laptop from "../Laptop/Laptop";
import Headphone from "../Headphone/Headphone";





const ProductDetail = props => {


  return (
    <div>
            {(() => {
                switch(props.product.category) {
		              case 'Mobile Phone':
			              return <Phone phone={props.product}/>;
		              case 'Laptop':
			              return <Laptop laptop ={props.product}/>;
		              case 'Headphone':
			              return <Headphone headphone={props.product}/>
		              default:
			              return null;
	        }
          })()}
        </div>
    
  );
};

export default connect()(ProductDetail);
