import LoadProductsCollection from "./LoadProductsCollection";

const LoadState = () => {
  try {
    const serializedProductCollectionState = localStorage.getItem(
      "productsCollection"
    );
    if (serializedProductCollectionState === null) {
      LoadProductsCollection();
      const serializedProductCollectionState = localStorage.getItem(
        "productsCollection"
      );

      return JSON.parse(serializedProductCollectionState);
    }
    return JSON.parse(serializedProductCollectionState);
  } catch (err) {
    return undefined;
  }
};

export default LoadState;
