import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    name: "5 Sports Automatic Watch",
    image:
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/s/e/seiko-5-sports-srpd53k1-large_1.jpg",
    brand: "SEIKO",
    price: 2000,
    categoryName: "Sports Watch",
    description:
      "Seiko 5 Sports Watch - SRPD53K1: A sleek and stylish timepiece with a 42.5 mm steel case, vibrant blue dial, and luminous hands. This automatic watch features a day-date function, unidirectional rotating bezel, and a durable steel strap, perfect for the modern man on the go.",
    customerReviews: {
      avgValue: 3.8,
      count: 388,
    },
    isBestSeller: false,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Casio Analog-Digital Black Dial Men's Watch-GA-2100-1A1DR (G987)",
    image: "https://m.media-amazon.com/images/I/61CUIlQYlqL._UX679_.jpg",
    brand: "Casio",
    price: 9195,
    categoryName: "Sports Watch",
    description:
      "The Casio GA-2100-1A1DR (G987) is a sleek men's watch with a black dial and mineral glass. It features dual time, countdown timer, stopwatch, and a convenient light function. With water resistance up to 200 meters, it's an ideal gift for birthdays, anniversaries, and weddings.",
    customerReviews: {
      avgValue: 4.5,
      count: 902,
    },
    isBestSeller: true,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "GARMIN Forerunner 945",
    image: "https://m.media-amazon.com/images/I/51Wzel4ZD-L._SX679_.jpg",
    brand: "GARMIN",
    price: 1640,
    categoryName: "Sports Watch",
    description:
      "The Garmin Forerunner 945 is the ultimate fitness companion, tracking steps, calories, and even providing personalized insights on your workouts, including VO2 max measurements. With Garmin Pay, you can conveniently make payments without your wallet. With built-in activity profiles, you can mix up your workouts and enjoy training while achieving your fitness goals.",
    customerReviews: {
      avgValue: 4.5,
      count: 1138,
    },
    isBestSeller: true,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Suunto Spartan Sport Wrist HR",
    image: "https://m.media-amazon.com/images/I/71e83m82p1L._SL1500_.jpg",
    brand: "Suunto",
    price: 5999,
    categoryName: "Sports Watch",
    description:
      "The Suunto Spartan Sport Wrist HR, a modern sports watch designed for accurate exercise tracking. With GPS, barometer, and wrist heart-rate sensor, it provides precise data for various sports modes, including running, cycling, swimming, and skiing. The watch offers free offline outdoor maps, detailed training insights through the Suunto app, and impressive battery life, making it a reliable companion for your active lifestyle.",
    customerReviews: {
      avgValue: 3.2,
      count: 1274,
    },
    isBestSeller: false,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Polar Ignite 2",
    image:
      "https://asset.conrad.com/media10/isa/160267/c1/-/en/002490726PI12/image.jpg?x=&y=",
    brand: "Polar",
    price: 4060,
    categoryName: "Sports Watch",
    description:
      "The Polar Precision Prime Heart Rate watch with advanced optical sensors for precise heart rate monitoring. The Fit Spark daily training guide offers personalized workout recommendations, while the Nightly Recharge feature measures overnight recovery. Stay on track and make informed decisions for optimal fitness and well-being.",
    customerReviews: {
      avgValue: 2.2,
      count: 316,
    },
    isBestSeller: false,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Seiko Prospex SRPC91",
    image:
      "https://www.citywatches.in/wp-content/uploads/2020/07/SRPC91K1_1-660x1024.jpg",
    brand: "Seiko",
    price: 5000,
    categoryName: "Sports Watch",
    description:
      "The Seiko Prospex SRPC91, a robust sports watch designed for adventure seekers. Its stainless steel case, 200m water resistance, and durable silicone strap ensure durability and reliability. With features like luminous hands, uni-directional rotating bezel, and automatic movement, this timepiece combines style and functionality for your outdoor escapades.",
    customerReviews: {
      avgValue: 1.8,
      count: 119,
    },
    isBestSeller: false,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Citizen Promaster Tough",
    image: "https://m.media-amazon.com/images/I/71tpCYHrFDL._UX569_.jpg",
    brand: "Citizen",
    price: 9000,
    categoryName: "Sports Watch",
    description:
      "The Citizen Promaster Tough sports watch. Featuring a stainless steel case and a chain-link bracelet with a fold-over clasp, it offers precise timekeeping with its quartz movement and sleek black dial. Powered by Eco-Drive technology, it never needs a battery and is water-resistant up to 20 bar, making it perfect for active lifestyles.",
    customerReviews: {
      avgValue: 1.8,
      count: 119,
    },
    isBestSeller: false,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Hala Analog-digital Military Full Black Sports Watch",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsD7inhVGBzAxPjezLViDHc_6ihrgGre2l2P82eEJ8ZQJqxiLz4o4UvwTy7-NLzkaf_gMcy9pCDLR5_k0Lu7LKnTBzW1Om1GXYJV7o8Jw&usqp=CAY",
    brand: "Hala",
    price: 599,
    categoryName: "Sports Watch",
    description:
      "Analog-Digital Military Full Black Sports Watch, designed for men. With its sleek all-black design, this fully waterproof watch is built to withstand the rigors of an active lifestyle. Stay on time and on trend with this stylish and durable timepiece.",
    customerReviews: {
      avgValue: 3.9,
      count: 1356,
    },
    isBestSeller: true,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Awex AW-1002 Green Army Digital Sports Watch",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/g/g/h/awex-1002-green-stylish-style-worth-men-original-imafx7vunmtqtzz9.jpeg?q=70",
    brand: "AWEX",
    price: 349,
    categoryName: "Sports Watch",
    description:
      "The AWEX Green Sports Digital Watch for men. With its vibrant green color and digital display, this watch seamlessly blends style and functionality. Perfect for sports and outdoor activities.",
    customerReviews: {
      avgValue: 2.5,
      count: 756,
    },
    isBestSeller: false,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "G-Shock ( GST-S110-1ADR ) Analog-Digital Watch - For Men G609",
    image:
      "https://rukminim1.flixcart.com/image/832/832/k4rcmfk0pkrrdj/watch-refurbished/e/b/p/c-g609-casio-original-imaf9fb8r4syeqqa.jpeg?q=70",
    brand: "G-Shock",
    price: 4945,
    categoryName: "Sports Watch",
    description:
      "The G-Shock (GST-S110-1ADR) Analog-Digital Watch, designed for men. With its black dial, round case, and black resin band, it combines style and durability. Water-resistant up to 200 meters and backed by a 2-year manufacturer warranty, it's the perfect companion for active lifestyles.",
    customerReviews: {
      avgValue: 4.9,
      count: 872,
    },
    isBestSeller: true,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Chronofighter Vintage Noseart (Tiger)",
    image:
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/g/r/graham-chronofighter-2cvas-b31a-bral127b-large.jpg",
    brand: "GRAHAM",
    price: 9999,
    categoryName: "Luxury Watch",
    description:
      "The Graham Chronofighter Vintage luxury watch for men. With its automatic movement, chronograph, and day-date features, it combines precision and functionality. The 44mm steel case, black dial, and leather strap exude timeless elegance, making it a must-have for watch enthusiasts.",
    customerReviews: {
      avgValue: 3.4,
      count: 119,
    },
    isBestSeller: true,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Rolex Men's Submariner Date Watch 116610LV",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSeOBN8dutDq19GBMffKlHH55Pl-42ISIa5Ob1Mkx7zpNYd71t7JogDr4pmLFBDI8zoy9E2xNIwQ6AOnjTNkD5xWVT6_l7AiyBgwL9tpNzHIleVSFBXNR6g",
    brand: "Rolex",
    price: 9138,
    categoryName: "Luxury Watch",
    description:
      "Experience the timeless elegance of the Rolex Submariner Date. With its silver-tone stainless steel case and bracelet, green dial, and luminescent markers, this Swiss-made watch exudes luxury and functionality. Water-resistant up to 300 meters, it is the perfect companion for both diving and sophisticated occasions.",
    customerReviews: {
      avgValue: 4.6,
      count: 218,
    },
    isBestSeller: true,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Moonwatch Professional Co‑Axial Master Chronometer Chronograph 42 mm",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSeOBN8dutDq19GBMffKlHH55Pl-42ISIa5Ob1Mkx7zpNYd71t7JogDr4pmLFBDI8zoy9E2xNIwQ6AOnjTNkD5xWVT6_l7AiyBgwL9tpNzHIleVSFBXNR6g",
    brand: "Omega",
    price: 8765,
    categoryName: "Luxury Watch",
    description:
      "Omega Speedmaster Moonwatch, a masterpiece of precision and style. With its manual winding movement, chronograph, and small seconds, it embodies the spirit of adventure. Crafted with Moonshine™ Gold, a green dial, and a yellow gold strap, it's a symbol of luxury and sophistication for men.",
    customerReviews: {
      avgValue: 3.6,
      count: 173,
    },
    isBestSeller: false,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Audemars Piguet Royal Oak Double Balance Wheel Openworked Baguette",
    image:
      "https://sale.platinumtimesco.com/wp-content/uploads/2022/11/Audemars-Piguet-Royal-Oak-Double-Balance-Wheel-Openworked-Baguette.jpeg",
    brand: "Audemars Piguet",
    price: 9425,
    categoryName: "Luxury Watch",
    description:
      "Audemars Piguet Royal Oak Double Balance Wheel Openworked Baguette for men. This pre-owned timepiece showcases exquisite craftsmanship and a mesmerizing openworked design. With a thin 5.57 mm caliber 3132 and a 45-hour power reserve, it combines precision and elegance in a single watch.",
    customerReviews: {
      avgValue: 3.3,
      count: 192,
    },
    isBestSeller: false,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Galaxy Watch4 LTE (44mm)",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398887-sm-r875fzgainu-481111530?$730_584_PNG$",
    brand: "SAMSUNG",
    price: 8550,
    categoryName: "Smart Watch",
    description:
      "The Galaxy Watch4 LTE (44mm) is a smartwatch that offers a comprehensive health and fitness tracking experience. It features a sleek design, a powerful BioActive Sensor, and a long-lasting battery. With its LTE connectivity, you can stay connected even when you're away from your phone.",
    customerReviews: {
      avgValue: 4.1,
      count: 816,
    },
    isBestSeller: true,
    quantity: 0,
  },
];
