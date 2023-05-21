import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sports Watch",
    description:
      "Performance-driven timepieces for active lifestyles, offering durability and specialized features.",
  },
  {
    _id: uuid(),
    categoryName: "Luxury Watch",
    description:
      "Exquisite timepieces with premium materials and craftsmanship, embodying elegance and status.",
  },
  {
    _id: uuid(),
    categoryName: "Smart Watch",
    description:
      "Innovative wearable tech, combining watch functionality with advanced features for connectivity and convenience.",
  },
];
