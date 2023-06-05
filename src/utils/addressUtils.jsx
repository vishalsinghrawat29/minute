import { toast } from "react-toastify";

const addUserAddress = async (
  address,
  encodedToken,
  authDispatch,
  setIsAddressForm
) => {
  try {
    const res = await fetch("/api/user/address", {
      method: "POST",
      headers: {
        authorization: encodedToken,
      },
      body: JSON.stringify({ address }),
    });
    const resJson = await res.json();
    if (res.status === 201) {
      authDispatch({ type: "setAddress", payload: resJson?.address });
      setIsAddressForm(false);
      toast.success("New address is added!");
    }
  } catch (err) {
    console.log(err);
  }
};

const removeUserAddress = async (addressId, encodedToken, authDispatch) => {
  try {
    const res = await fetch(`api/user/address/${addressId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken },
    });
    const resJson = await res.json();
    if (res.status === 200) {
      authDispatch({ type: "setAddress", payload: resJson?.address });
      toast.success("Address removed!");
    }
  } catch (err) {
    console.log(err);
  }
};

const updateUserAddress = async (
  address,
  encodedToken,
  authDispatch,
  setIsAddressForm
) => {
  try {
    const res = await fetch(`api/user/address/${address._id}`, {
      method: "POST",
      headers: {
        authorization: encodedToken,
      },
      body: JSON.stringify({ address }),
    });
    const resJson = await res.json();
    if (res.status === 200) {
      authDispatch({ type: "setAddress", payload: resJson?.address });
      setIsAddressForm(false);
      toast.success("Address Updated!");
    }
  } catch (err) {
    console.log(err);
  }
};

export { addUserAddress, removeUserAddress, updateUserAddress };
