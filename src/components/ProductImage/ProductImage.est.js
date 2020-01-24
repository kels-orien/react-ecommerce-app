import React from "react";
import { render } from "@testing-library/react";
import ProductImage from "./ProductImage";
import image from '../../assets/images/Tecno-Spark-3-1.jpg'

test("ProductImage show Image Url", () => {
 const {getByText,getByLabelText, container} =  render(<ProductImage  image={image}/>)

  
  const e1 = getByLabelText(/image-link/i)
  expect(e1).toContainElement(getByText(/Tecno-Spark-3-1\.jpg/))
});
