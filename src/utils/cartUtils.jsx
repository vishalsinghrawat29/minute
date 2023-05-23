const isProductInCart = (cart, id) => {
  cart?.find((cartProduct) => cartProduct.id === id);
};
const addToCartHandler = async (item) => {
  const encodedToken = localStorage.getItem("token");
  console.log("hi");
  try {
    const res = await fetch("/api/user/cart", {
      method: "POST",
      headers: { authorization: encodedToken },
      body: JSON.stringify({ product: item }),
    });
    const resJson = await res.json();
    console.log(resJson);
  } catch (err) {
    console.log(err);
  }
};
export { isProductInCart, addToCartHandler };
