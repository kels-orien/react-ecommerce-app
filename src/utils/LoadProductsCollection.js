products = [];

export default function LoadProductsCollections() {
  const allProducts = localStorage.setItem(
    "productsCollection",
    JSON.stringify(products)
  );

  return allProducts;
}
