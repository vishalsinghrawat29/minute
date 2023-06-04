import { toast } from "react-toastify";

const isProductInCart = (cart, id) => {
  return cart?.find((cartProduct) => cartProduct._id === id) ? true : false;
};

const addProductToCart = async (
  item,
  productDispatch,
  encodedToken,
  cartBtnDisabled
) => {
  cartBtnDisabled(true);

  try {
    const res = await fetch("/api/user/cart", {
      method: "POST",
      headers: { authorization: encodedToken },
      body: JSON.stringify({ product: item }),
    });
    const resJson = await res.json();
    if (res.status === 201) {
      productDispatch({ type: "setCart", payload: resJson?.cart });
      toast.success("Item is added to Cart!");
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
  encodedToken,
  setBtnDisabled
) => {
  setBtnDisabled(true);
  try {
    const res = await fetch(`/api/user/cart/${productId}`, {
      method: "POST",
      headers: { authorization: encodedToken },
      body: JSON.stringify({ action: { type } }),
    });
    const resJson = await res.json();
    if (res.status === 200) {
      productDispatch({ type: "setCart", payload: resJson?.cart });
      toast.success(`Item Qty Update in cart!`);
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
  encodedToken,
  setBtnDisabled
) => {
  setBtnDisabled(true);
  try {
    const res = await fetch(`/api/user/cart/${productId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken },
    });
    const resJson = await res.json();
    if (res.status === 200) {
      productDispatch({ type: "setCart", payload: resJson?.cart });
      toast.success("Item is removed from Cart!");
    }
  } catch (err) {
    console.log(err);
  } finally {
    setBtnDisabled(false);
  }
};

const clearCart = async (productDispatch, cart, encodedToken) => {
  try {
    for (const item of cart) {
      try {
        const res = await fetch(`/api/user/cart/${item._id}`, {
          method: "DELETE",
          headers: { authorization: encodedToken },
        });
        const resJson = await res.json();
        if (res.status === 200) {
          productDispatch({ type: "setCart", payload: resJson?.cart });
        }
      } catch (err) {
        console.log(err);
      }
    }
    productDispatch({ type: "setCartReset" });
  } catch (error) {
    console.log("Error in clear cart", error);
  }
};

export {
  isProductInCart,
  addProductToCart,
  getCartProducts,
  handleProductQunatityInCart,
  removeProductFromCart,
  clearCart,
};
