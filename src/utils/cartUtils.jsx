const isProductInCart = (cart, id) => {
  return cart?.find((cartProduct) => cartProduct._id === id) ? true : false;
};

const addProductToCart = async (item, productDispatch, cartBtnDisabled) => {
  cartBtnDisabled(true);
  const encodedToken = localStorage.getItem("token");
  try {
    const res = await fetch("/api/user/cart", {
      method: "POST",
      headers: { authorization: encodedToken },
      body: JSON.stringify({ product: item }),
    });
    const resJson = await res.json();
    if (res.status === 201) {
      productDispatch({ type: "setCart", payload: resJson?.cart });
    }
  } catch (err) {
    console.log(err);
  } finally {
    cartBtnDisabled(false);
  }
};

const getCartProducts = async (encodedToken) => {
  try {
    const res = await fetch("/api/user/cart", {
      headers: { authorization: encodedToken },
    });
    if (res.status === 200) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
const handleProductQunatityInCart = async (
  productDispatch,
  productId,
  type,
  setBtnDisabled
) => {
  setBtnDisabled(true);
  try {
    const encodedToken = localStorage.getItem("token");
    const res = await fetch(`/api/user/cart/${productId}`, {
      method: "POST",
      headers: { authorization: encodedToken },
      body: JSON.stringify({ action: { type } }),
    });
    const resJson = await res.json();
    if (res.status === 200) {
      productDispatch({ type: "setCart", payload: resJson?.cart });
    }
  } catch (err) {
    console.log(err);
  } finally {
    setBtnDisabled(false);
  }
};
const removeProductFromCart = async (
  productDispatch,
  productId,
  setBtnDisabled
) => {
  setBtnDisabled(true);
  try {
    const encodedToken = localStorage.getItem("token");
    const res = await fetch(`/api/user/cart/${productId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken },
    });
    const resJson = await res.json();
    if (res.status === 200) {
      productDispatch({ type: "setCart", payload: resJson?.cart });
    }
  } catch (err) {
    console.log(err);
  } finally {
    setBtnDisabled(false);
  }
};
export {
  isProductInCart,
  addProductToCart,
  getCartProducts,
  handleProductQunatityInCart,
  removeProductFromCart,
};
