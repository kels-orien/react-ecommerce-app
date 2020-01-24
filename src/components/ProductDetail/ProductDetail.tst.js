import React from "react";
import { render } from "@testing-library/react";
import ProductDetail from "./ProductDetail";

test("ProductDetail Component test. Display detail values", () => {
  const phone = {
    id: 0,
    name: "Redmi Note 7"
  };

  const { getByText } = render(<ProductDetail id="0" ProductDetail={phone} />);
  expect(getByText(/^ProductDetail name:/).textContent).toBe(
    "ProductDetail name: Redmi Note 7"
  );
});

