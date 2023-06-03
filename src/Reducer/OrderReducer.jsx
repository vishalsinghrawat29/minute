const OrderReducer = (state, action) => {
  switch (action.type) {
    case "setOrderAddress":
      return { ...state, orderAddress: action.payload };

    case "setPriceDetails":
      const { price, discount, coupon, totalAmt, totalDiscount } =
        action.payload;
      return {
        ...state,
        priceDetails: {
          ...action.payload,
          price,
          discount,
          coupon,
          totalAmt,
          totalDiscount,
        },
      };

    default:
      return state;
  }
};
export { OrderReducer };
