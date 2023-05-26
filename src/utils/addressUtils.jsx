const getUserAddress = async (encodedToken) => {
  try {
    const res = await fetch("/api/user/address", {
      headers: {
        authorization: encodedToken,
      },
    });
    if (res.status === 200) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

const addUserAddress = async (address, encodedToken) => {
  try {
    const res = await fetch("/api/user/address", {
      method: "POST",
      headers: {
        authorization: encodedToken,
      },
      body: JSON.stringify(address),
    });
    const resJson = await res.json();
    console.log(resJson);
  } catch (err) {
    console.log(err);
  }
};
export { getUserAddress, addUserAddress };
