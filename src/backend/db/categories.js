import { v4 as uuid } from "uuid";
import SportsWatch from "../../Assets/Category/Sports Watch.png";
import LuxuryWatch from "../../Assets/Category/Luxury Watch.png";
import SmartWatch from "../../Assets/Category/Smart Watch.png";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sports Watch",
    description:
      "Active lifestyles, offering durability and specialized features.",
    image: SportsWatch,
  },
  {
    _id: uuid(),
    categoryName: "Luxury Watch",
    description:
      "Premium materials and craftsmanship, embodying elegance and status.",
    image: LuxuryWatch,
  },
  {
    _id: uuid(),
    categoryName: "Smart Watch",
    description:
      "Innovative and Advanced features for connectivity and convenience.",
    image: SmartWatch,
  },
];
