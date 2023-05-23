const isProductInWishlist = (cart, id) => {
  cart?.find((wishlistProduct) => wishlistProduct.id === id);
};
export { isProductInWishlist };
