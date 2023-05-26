const AuthReducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload };
    case "setToken":
      return { ...state, token: action.payload };
    case "setAddress":
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
export { AuthReducer };
