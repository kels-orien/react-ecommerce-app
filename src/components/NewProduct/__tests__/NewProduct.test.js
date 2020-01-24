import React from "react";
import { render, cleanup } from "@testing-library/react";
import NewProduct from "../NewProduct";

afterEach(cleanup)

test("NewProduct show prop value", () => {
  const phone = {
    name: "Redmi Note 7",
    imageurl:["https://res.cloudinary.com/dofiasjpi/image/upload/v1566409025/e-shop/Phones/Infinix%20Hot7%20Pro/1_1.jpg"],
    price: 31400,
  };

  const { getByTestId } = render(<NewProduct id={0} key={0} product={phone} />);
  expect(getByTestId("text-wrapper").textContent).toBe(
    "Redmi Note 7"
  );
  
});

