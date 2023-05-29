import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    address: [
      {
        _id: uuid(),
        name: "Adarsh Balika",
        street: "#1/4 , 100ft Ring Road, Karve Nagar",
        city: "Ajmer",
        state: "Rajsathan ",
        country: "India",
        zipCode: "452412",
        mobile: "123456789",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vishal",
    lastName: "Singh Rawat",
    email: "vishal@gmail.com",
    password: "vishal1234",
    address: [
      {
        _id: uuid(),
        name: "Vishal Singh Rawat",
        street: "#1/4 , 100ft Ring Road, Karve Nagar",
        city: "Bangalore",
        state: "Maharashtra ",
        country: "India",
        zipCode: "452412",
        mobile: "123456789",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
