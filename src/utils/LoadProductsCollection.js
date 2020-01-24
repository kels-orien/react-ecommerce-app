import {newProducts} from "./../data/items";

export default function LoadProductsCollections() {
  localStorage.setItem("productsCollection", JSON.stringify(newProducts));
}
