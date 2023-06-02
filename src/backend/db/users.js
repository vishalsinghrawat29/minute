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
        street: "H. No. 21/4 , 100ft Ring Road, Vaishali Nagar",
        city: "Bangalore",
        state: "Karnataka ",
        country: "India",
        zipCode: "530068",
        mobile: "9829124431",
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
        street: "Plot No. 33 , Rawat Bhawan, Bhunabai",
        city: "Ajmer",
        state: "Rajasthan",
        country: "India",
        zipCode: "305001",
        mobile: "9352441232",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
