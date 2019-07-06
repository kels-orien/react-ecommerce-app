import LoadProductsCollection from "./LoadProductsCollection";

export const loadState = () => {
  try {
    const serializedProductCollectionState = localStorage.getItem(
      "productsCollection"
    );
    if (serializedProductCollectionState === null) {
      LoadProductsCollection();
    }
    return JSON.parse(serializedProductCollectionState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = allProducts => {};
