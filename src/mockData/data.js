import Image1 from "../assets/tabs/1.png";
import Image2 from "../assets/tabs/2.png";
import Image3 from "../assets/tabs/3.png";
import Image4 from "../assets/tabs/4.png";

export const NavbarMenu = [
  { id: 1, title: "Home", link: "home" },
  { id: 2, title: "Trainers", link: "trainer" },
  { id: 3, title: "Programs", link: "program" },
  { id: 4, title: "Gear", link: "gear" },
  { id: 5, title: "Pricing", link: "pricing" },
];

export const ProductsData = [
  {
    id: 1,
    category: "Yoga",
    image: Image1,
    title: "Cork Yoga Mat",
    info: "6mm cork and natural rubber. Grips harder the more you sweat.",
    price: "$68",
  },
  {
    id: 2,
    category: "Fitness",
    image: Image2,
    title: "Hex Dumbbell Set",
    info: "Cast iron, urethane coated. 5–50lb pairs.",
    price: "$240",
  },
  {
    id: 3,
    category: "Yoga",
    image: Image3,
    title: "Travel Yoga Mat",
    info: "Folds to the size of a towel. Doesn't fold on grip.",
    price: "$54",
  },
  {
    id: 4,
    category: "Fitness",
    image: Image4,
    title: "Adjustable Bench",
    info: "7-position back, 3-position seat. Rated to 600lb.",
    price: "$310",
  },
  {
    id: 5,
    category: "Muscles",
    image: Image1,
    title: "Olympic Barbell",
    info: "20kg, 28mm shaft, dual knurl marks.",
    price: "$185",
  },
  {
    id: 6,
    category: "Muscles",
    image: Image2,
    title: "Bumper Plate Pair",
    info: "Color-coded, low-bounce rubber. Sold in 10kg pairs.",
    price: "$140",
  },
  {
    id: 7,
    category: "Yoga",
    image: Image3,
    title: "Cork Yoga Block",
    info: "Set of two. Built for depth, not decoration.",
    price: "$32",
  },
];

export const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "Member since 2022",
    text: "I'd tried four gyms before this one. This is the first program I actually finished — and the first one where the coaches noticed when my form slipped.",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    role: "Member since 2023",
    text: "No fluff, no upsells, no spa music. Just a floor that's built for work and people who hold you to your own numbers.",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen Walsh",
    role: "Member since 2021",
    text: "Down 18kg and up on every lift that matters to me. The programming changed every six weeks so my body never got comfortable.",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Ariana Cole",
    role: "Member since 2024",
    text: "The early class at 5:40am has a waitlist. That tells you everything about the people who train here.",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];

export const StatsData = [
  { id: 1, value: "04:55", unit: "AM", label: "First class on the floor" },
  { id: 2, value: "1,240", unit: "KG", label: "Heaviest pull this year" },
  { id: 3, value: "06", unit: "COACHES", label: "On staff, all certified" },
  { id: 4, value: "340+", unit: "MEMBERS", label: "Training weekly" },
];