const AuthReducer = (state, action) => {
  switch (action.type) {
    case "setIsLogged":
      return { ...state, isLogged: action.payload };
    case "setUser":
      return { ...state, user: action.payload };
    case "setToken":
      return { ...state, token: action.payload };
    case "setMessage":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
export { AuthReducer };
