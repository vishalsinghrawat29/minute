const intialOrderState = {
  orderAddress: {},
  priceDetails: {
    price: 0,
    discount: 0,
    coupon: 0,
    totalAmt: 0,
    totalDiscount: 0,
  },
};
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

    case "setOrderReset":
      return intialOrderState;

    default:
      return state;
  }
};
export { intialOrderState, OrderReducer };
