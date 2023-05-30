import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Shocknshop Digital Sports - 315RED, Multi Functional Black Dial Watch for Mens Boys",
    image:
      "https://m.media-amazon.com/images/I/61fyBGuO18L._AC_UL600_FMwebp_QL65_.jpg",
    brand: "Shocknshop",
    price: 284,
    categoryName: "Sports Watch",
    description:
      "Shocknshop Digital Sports Watch - Multi-functional black dial, waterproof (3Atm), complete with calendar, chronograph, LED display. Quartz movement, 6 months warranty. Perfect for men and boys.",
    customerReviews: {
      avgValue: 3.8,
      count: 788,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "V2A Men's Digital 5ATM Waterproof Sports Watch with Backlight Alarm Stopwatch (Green)",
    image:
      "https://m.media-amazon.com/images/I/61BCDdRbSjL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "V2A",
    price: 790,
    categoryName: "Sports Watch",
    description:
      "V2A Men's Digital Sports Watch - 5ATM waterproof, with backlight, alarm, and stopwatch. Green resin band, 48mm case diameter, and 50 meters water resistance. Perfect for sports enthusiasts.",
    customerReviews: {
      avgValue: 4.1,
      count: 106,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "ASGARD Multi Functional Sports Digital Dial Men's Watch",
    image:
      "https://m.media-amazon.com/images/I/71Wm1336qIL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "ASGARD",
    price: 180,
    categoryName: "Sports Watch",
    description:
      "ASGARD Men's Digital Sports Watch - Green silicone band, tachymeter bezel. Polycarbonate case, 30m water resistance. Features alarm, stop watch, back light. Perfect for sports enthusiasts.",
    customerReviews: {
      avgValue: 3.7,
      count: 438,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "SKMEI Men's Digital Sports Watch 50m Waterproof LED Military Multifunction Smart Watch Stopwatch Countdown Auto Date Alarm",
    image:
      "https://m.media-amazon.com/images/I/61eac98fJRL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "SKMEI",
    price: 799,
    categoryName: "Sports Watch",
    description:
      "SKMEI Sports Watch - Black polyurethane band, stainless steel GMT bezel. Acrylonitrile Butadiene Styrene case (49mm diameter), 50m water resistance. Features alarm. Perfect for sports and outdoor activities.",
    customerReviews: {
      avgValue: 4.6,
      count: 343,
    },
    isBestSeller: true,
  },
  {
    _id: uuid(),
    name: "V2A Chronograph Analogue and Digital Sports Watch for Men",
    image:
      "https://m.media-amazon.com/images/I/815PjZsaUHL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "V2A",
    price: 899,
    categoryName: "Sports Watch",
    description:
      "V2A Sports Watch - Black resin band, 5.4cm plastic case, 30m water resistance. Day-Date-Month calendar, analogue-digital display. Ideal for sports and daily use.",
    customerReviews: {
      avgValue: 2.8,
      count: 218,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "HOK Digital Sport Watch Waterproof for Men with Stopwatch Alarm LED Back Light",
    image:
      "https://m.media-amazon.com/images/I/51D11ndcZ4L._AC_UL600_FMwebp_QL65_.jpg",
    brand: "HOK",
    price: 8017,
    categoryName: "Sports Watch",
    description:
      "HOK Ultra-thin Digital Sports Watch - Black band, 50m water resistance. Features alarm, LED display, and shock resistance. Ideal for sports enthusiasts and makes a great gift.",
    customerReviews: {
      avgValue: 4.5,
      count: 228,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "CakCity Sports Watch Men with Large Face 50M Waterproof Watch for Men Digital Watch Outdoor Sports Watches for Men Unisex,Black",
    image:
      "https://m.media-amazon.com/images/I/61pP6Ctoy2L._AC_UL600_FMwebp_QL65_.jpg",
    brand: "CakCity",
    price: 7102,
    categoryName: "Sports Watch",
    description:
      "CakCity 2015-BB Sports Watch: Stylish and durable, with multiple functions and water resistance up to 50 meters. Perfect for active individuals.",
    customerReviews: {
      avgValue: 1.8,
      count: 128,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "V2A Military Green Camouflage Analog Digital Sports Wrist Watch for Men",
    image:
      "https://m.media-amazon.com/images/I/712dMiar5BL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "V2A",
    price: 699,
    categoryName: "Sports Watch",
    description:
      "V2A Military Sports Watch: Dual dial with analog and digital display, shock-resistant, and water-resistant up to 30 meters. Perfect for sports and outdoor activities, and comes with a 1-year warranty for manufacturing defects.",
    customerReviews: {
      avgValue: 2.8,
      count: 312,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "Shocknshop Digital Sports -W320, Multi Functional Black Dial Watch for Mens Boys ",
    image:
      "https://m.media-amazon.com/images/I/71uAU9YYMsL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "Shocknshop",
    price: 599,
    categoryName: "Sports Watch",
    description:
      "Shocknshop W320 Digital Watch: Multicolor rubber band, 3ATM water resistance, complete calendar, and LED display. Round dial, 55mm diameter, 6 months warranty against defects.",
    customerReviews: {
      avgValue: 1.7,
      count: 114,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "SKMEI Men's Digital Sports Watch, LED Square Large Face Analog Quartz Wrist Watch with Multi-Time Zone Waterproof Stopwatch",
    image:
      "https://m.media-amazon.com/images/I/6149-JlZjoL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "SKMEI",
    price: 949,
    categoryName: "Sports Watch",
    description:
      "SKMEI 1688_RG Sports Watch: Black resin band, gold dial, analog-digital display, water-resistant up to 30 meters. Durable ABS+PU case, perfect for sports enthusiasts.",
    customerReviews: {
      avgValue: 4.1,
      count: 724,
    },
    isBestSeller: false,
  },

  {
    _id: uuid(),
    name: "BENYAR Luxury Business Casual Party-Wear Silicone Chronograph Date Display Watch for Men",
    image:
      "https://m.media-amazon.com/images/I/61FdLnjsLRS._AC_UL600_FMwebp_QL65_.jpg",
    brand: "BENYAR",
    price: 2690,
    categoryName: "Luxury Watch",
    description:
      "BENYAR Ben-5140-Black-Gold Chronograph Watch: High-quality, durable, and precise. Features three sub-dials, black silicone band, stainless steel case, and 30 meters water resistance.",
    customerReviews: {
      avgValue: 4.2,
      count: 580,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "Carlson Raulen Mens Chronograph Waterproof Luxury Fashion Military Quartz Sports Analog Wristwatch",
    image:
      "https://m.media-amazon.com/images/I/51RIP4Vi2yL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "Carlson Raulen",
    price: 1799,
    categoryName: "Luxury Watch",
    description:
      "Carlson Raulen CRMFCHR0100102 Luxury Watch: Elegant black dial, stainless steel band, working chronograph, and 30 meters water resistance. A stylish timepiece for a sophisticated look.",
    customerReviews: {
      avgValue: 3.8,
      count: 204,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "PINTIME Luxury Mens/Womens Unisex Diamond Analog ling Iced-Out Watch Oblong Wristwatch Crystal Quartz Metal Watch",
    image:
      "https://m.media-amazon.com/images/I/81WZG4pD6jL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "PINTIME",
    price: 3325,
    categoryName: "Luxury Watch",
    description:
      "PINTIME Unisex Blinged-out Watch: Striking appearance with crystal decoration, durable stainless steel strap, and accurate Japanese Quartz movement. Comes with a gift box. Perfect for any occasion.",
    customerReviews: {
      avgValue: 4.2,
      count: 712,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "NAVIFORCE Digital Watch Men Luxury Stainless Steel Analog Quartz Waterproof Watches Fashion Business Chronograph Military Multifunctional Wristwatch",
    image:
      "https://m.media-amazon.com/images/I/61K8XqoOuiL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "NAVIFORCE",
    price: 2752,
    categoryName: "Luxury Watch",
    description:
      "NAVIFORCE Men's Analog-Digital Watch: Precise Japanese quartz movement, 30m water resistance, and multifunctional features for outdoor sports. A luxurious and practical gift for any occasion.",
    customerReviews: {
      avgValue: 4.4,
      count: 753,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "OLEVS Chronograph Luxury Watch for Men (Green Dial)",
    image:
      "https://m.media-amazon.com/images/I/61z+HSKmQpL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "OLEVS",
    price: 3190,
    categoryName: "Luxury Watch",
    description:
      "OLEVS Luxury Chronograph Watch: Elegant design with a green dial and gold-tone accents. Features include a functional chronograph, 24-hour subdial, and date display. Water-resistant up to 30 meters with a durable stainless steel strap and case.",
    customerReviews: {
      avgValue: 3.2,
      count: 164,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "SWADESI STUFF Multi Dial Chronograph Luxury Quartz Analog Watch for Men",
    image:
      "https://m.media-amazon.com/images/I/81QpaxxZlLL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "SWADESI",
    price: 3120,
    categoryName: "Luxury Watch",
    description:
      "SWADESI STUFF Luxury Chronograph Watch: Blue dial, black stainless steel band. 44mm case diameter, quartz movement, water resistance, 6-month warranty. Suitable for ages 10+.",
    customerReviews: {
      avgValue: 1.3,
      count: 102,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "Fastrack Analog Multicolor Dial Men's Casual Watch",
    image:
      "https://m.media-amazon.com/images/I/71kvcoHhr4L._AC_UL600_FMwebp_QL65_.jpg",
    brand: "Fastrack",
    price: 4695,
    categoryName: "Luxury Watch",
    description:
      "Fastrack Tick Tock Collection: Trendy and stylish men's multifunction watch. Black-plated metal bracelet, brown band, black dial. Water-resistant, 2-year warranty.",
    customerReviews: {
      avgValue: 2.1,
      count: 127,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "BENYAR Luxury Business Casual Party-Wear Silicone Chronograph Date Display Watch for Men",
    image:
      "https://m.media-amazon.com/images/I/61l376IZHNS._AC_UL600_FMwebp_QL65_.jpg",
    brand: "BENYAR",
    price: 3899,
    categoryName: "Luxury Watch",
    description:
      "Benyar Luxury Chronograph Watch for Men: Accurate timekeeping with three sub-dials and Japanese quartz movement. Durable stainless steel case, scratch-resistant hardlex crystal, and water resistance make it suitable for any occasion.",
    customerReviews: {
      avgValue: 4.4,
      count: 580,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "Carlson Raulen Men Women Waterproof Luxury Fashion Military Quartz Sports Analog Wristwatch (Silver)",
    image:
      "https://m.media-amazon.com/images/I/61l376IZHNS._AC_UL600_FMwebp_QL65_.jpg",
    brand: "Carlson Raulen",
    price: 1999,
    categoryName: "Luxury Watch",
    description:
      "Carlson Raulen Unique Design Watch: Elegant dial with calendar, durable stainless steel band, and waterproof (30ATM) for daily use. Accurate timekeeping with Japan quartz movement, making it perfect for business, casual, and daily wear.",
    customerReviews: {
      avgValue: 2.7,
      count: 144,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "FORSINING Square Luxury Retro Mechanical Watch for Men, Gorgeous Hollow Skeleton Self-Wind Carved Automatic Watch",
    image:
      "https://m.media-amazon.com/images/I/912b-CMCfLL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "FORSINING",
    price: 9816,
    categoryName: "Luxury Watch",
    description:
      "FORSINING Luxury Mechanical Watch: Retro and exquisite design, battery-free automatic self-winding movement. Water resistant up to 50m, suitable for all occasions.",
    customerReviews: {
      avgValue: 4.6,
      count: 871,
    },
    isBestSeller: true,
  },
  {
    _id: uuid(),
    name: "Noise Newly Launched Quad Call 1.81 Display, Bluetooth Calling Smart Watch, AI Voice Assistance, 160+Hrs Battery Life, Metallic Build, in-Built Games, 100 Sports Modes, 100+ Watch Faces (Rose Pink)",
    image:
      "https://m.media-amazon.com/images/I/61khLNWFnHL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "Noise",
    price: 1699,
    categoryName: "Smart Watch",
    description:
      "Noise ColorFit Quad Call Smartwatch features a 1.81-inch TFT display, 7-day battery life, Bluetooth calling, health monitoring, and 100+ watch faces, making it a versatile and stylish companion for your daily activities.",
    customerReviews: {
      avgValue: 3.6,
      count: 295,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "beatXP Marv Raze Advanced Bluetooth Calling Smartwatch with 1.96 HD Display, 60 Hz Fast Refresh Rate, 24/7 Health Tracking with 100+ Sports Mode, (Upto 7 Days Battery)",
    image:
      "https://m.media-amazon.com/images/I/71H-dH3u4jL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "beatXP",
    price: 1299,
    categoryName: "Smart Watch",
    description:
      "BeatXP Marv Raze Smartwatch offers a 1.96 HD display, EzyPairTM Bluetooth calling, 60Hz refresh rate, 24/7 health monitoring, and long battery life, making it a feature-packed companion for your everyday needs.",
    customerReviews: {
      avgValue: 4.3,
      count: 660,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "Fire-Boltt Invincible Plus 1.43 AMOLED Display Smartwatch with Bluetooth Calling, TWS Connection, 300+ Sports Modes, 110 in-Built Watch Faces, 4GB Storage & AI Voice Assistant (Rose Gold)",
    image:
      "https://m.media-amazon.com/images/I/61WMBCxsjJL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "Fire-Boltt",
    price: 4450,
    categoryName: "Smart Watch",
    description:
      "Fire-Boltt Invincible Plus features a vibrant 1.43 AMOLED display, 5-day battery life, TWS connection support, 300 sports modes, and 110 inbuilt watch faces, making it a versatile and stylish smartwatch for fitness enthusiasts and tech-savvy individuals.",
    customerReviews: {
      avgValue: 4.3,
      count: 738,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "Hammer Pulse X 1.83 Display Smart Watch with Bluetooth Calling, Voice Assistant & 60+ Sports Modes, SpO2, Heart Rate Tracking (Black)",
    image:
      "https://m.media-amazon.com/images/I/61kaqYoix4L._AC_UL600_FMwebp_QL65_.jpg",
    brand: "Hammer",
    price: 3499,
    categoryName: "Smart Watch",
    description:
      "Hammer Pulse X is a feature-packed smartwatch with a 1.83 brightest display and long battery life. It offers AI voice assistant, 60+ sports modes, notification alerts, and a strong metallic body, making it a perfect choice for fitness and tech enthusiasts.",
    customerReviews: {
      avgValue: 1.2,
      count: 148,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "Fastrack Reflex Play + BT Calling 1.3 AMOLED Display Smartwatch with AOD Premium Metallic Body AI Voice Assistant in-Built Games BP Monitor 24x7 HRM SpO2 Upto 7 Day Battery IP68 (Black)",
    image:
      "https://m.media-amazon.com/images/I/61sJzENDv2L._AC_UL600_FMwebp_QL65_.jpg",
    brand: "Fastrack",
    price: 5799,
    categoryName: "Smart Watch",
    description:
      "Fastrack Reflex Play+ is a feature-rich smartwatch with BT calling, an immersive 1.3-inch AMOLED display, and a complete health suite. It offers over 100+ cloud watch faces, 25+ multi-sports modes, and is designed to elevate your style and fitness game.",
    customerReviews: {
      avgValue: 3.3,
      count: 720,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "Noise ColorFit Pro 4 Alpha 1.78 AMOLED Display, Bluetooth Calling Smart Watch, Functional Crown, Metallic Build, Intelligent Gesture Control, Instacharge (Silver Grey)",
    image:
      "https://m.media-amazon.com/images/I/61h+le2DUxL._AC_UL600_QL65_.jpg",
    brand: "Noise",
    price: 3999,
    categoryName: "Smart Watch",
    description:
      "Noise ColorFit Pro 4 Alpha features a 1.78 AMOLED display with Always On Display and a functional digital crown for easy navigation. Enjoy a stable calling experience, gesture control, and up to 7-day battery life with fast charging.",
    customerReviews: {
      avgValue: 4.1,
      count: 372,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Charcoal Black)",
    image:
      "https://m.media-amazon.com/images/I/617ysOitciL._AC_UL600_FMwebp_QL65_.jpg",
    brand: "boAt",
    price: 7899,
    categoryName: "Smart Watch",
    description:
      "Boat Watch Xtend features Alexa built-in, a 1.69 HD display, heart rate and SpO2 monitoring, sleep tracking, 14 sports modes, and up to 7 days of battery life, making it an ideal smartwatch for fitness enthusiasts.",
    customerReviews: {
      avgValue: 4.3,
      count: 998,
    },
    isBestSeller: true,
  },
  {
    _id: uuid(),
    name: "beatXP Marv Neo 1.85'' Display, Bluetooth Calling Smart Watch, Smart AI Voice Assistant, 100+ Sports Modes, Heart & SpO2 Monitoring, IP68, Fast Charging (Electric Black)",
    image:
      "https://m.media-amazon.com/images/I/61H-JDPo9uL._AC_UL600_QL65_.jpg",
    brand: "BeatXP",
    price: 1599,
    categoryName: "Smart Watch",
    description:
      "BeatXP Marv Neo is a Bluetooth calling smartwatch with a 1.85 HD display, 100+ sports modes, and 24/7 health monitoring for an enhanced user experience.",
    customerReviews: {
      avgValue: 4.2,
      count: 798,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "Fastrack Reflex Play 1.3 AMOLED Display Smart Watch with AOD Premium Metallic Body Upto 7 Day Battery, IP68",
    image:
      "https://m.media-amazon.com/images/I/71CsWSTI3pL._AC_UL600_QL65_.jpg",
    brand: "BeatXP",
    price: 6459,
    categoryName: "Smart Watch",
    description:
      "Experience an immersive 1.3-inch AMOLED display with built-in games, complete health monitoring, multiple watch faces, and a long 7-day battery life in this feature-packed smartwatch.",
    customerReviews: {
      avgValue: 3.7,
      count: 592,
    },
    isBestSeller: false,
  },
  {
    _id: uuid(),
    name: "PTron Force X10e Smartwatch with 1.7 Full Touch Color Display, 24/7 Heart Rate, SpO2, Multiple Watch Faces, 10-12 Days Runtime, Sleep/Health/Fitness Trackers & IP68 Waterproof (Pink), Free Size",
    image:
      "https://m.media-amazon.com/images/I/61+hMXLjWVL._AC_UL600_QL65_.jpg",
    brand: "PTron",
    price: 1099,
    categoryName: "Smart Watch",
    description:
      "Discover the pTron Force smartwatch with a 1.7-inch colorful display, real-time health tracking, customizable watch faces, and smart features like notifications and camera control.",
    customerReviews: {
      avgValue: 2.8,
      count: 391,
    },
    isBestSeller: false,
  },
];
