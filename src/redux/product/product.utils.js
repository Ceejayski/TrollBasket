export const findProduct = ({ productlist, product }) => {
  return productlist.find((cartItem) => cartItem.id === product.id);
};

export const reduceStocks = ({ prevProductItems, nextProductItem }) => {
  const presentProduct = findProduct({ prevProductItems, nextProductItem });

  return prevProductItems.map((cartItem) =>
    cartItem.id === presentProduct.id
      ? {
          ...cartItem,
          stocks: nextProductItem.stocks - nextProductItem.quantity,
        }
      : cartItem
  );
};
