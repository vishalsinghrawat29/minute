const isProductInWishlist = (cart, id) => {
  return cart?.find((wishlistProduct) => wishlistProduct._id === id)
    ? true
    : false;
};

const getWishlistProduct = async (encodedToken) => {
  try {
    const res = await fetch("/api/user/wishlist", {
      headers: { authorization: encodedToken },
    });
    if (res.status === 200) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

const addProductToWishlist = async (item, productDispatch) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const res = await fetch("/api/user/wishlist", {
      method: "POST",
      headers: { authorization: encodedToken },
      body: JSON.stringify({ product: item }),
    });
    const resJson = await res.json();
    if (res.status === 201) {
      productDispatch({ type: "setWishlist", payload: resJson?.wishlist });
    }
  } catch (err) {
    console.log(err);
  }
};

const removeProductFromWishlist = async (productDispatch, productId) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const res = await fetch(`/api/user/wishlist/${productId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken },
    });
    const resJson = await res.json();
    if (res.status === 200) {
      productDispatch({ type: "setWishlist", payload: resJson?.wishlist });
    }
  } catch (err) {
    console.log(err);
  }
};

export {
  isProductInWishlist,
  getWishlistProduct,
  addProductToWishlist,
  removeProductFromWishlist,
};
