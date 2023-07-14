import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "about", url: "/about" },
  { id: 3, text: "products", url: "/products" },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission is to provide a seamless online shopping experience that delights and fulfills your unique desires.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to revolutionize online shopping by creating a personalized, immersive, and unforgettable retail experience.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "With a rich history of innovation, we have been at the forefront of shaping the online shopping landscape, delivering excellence since our inception.",
  },
];
