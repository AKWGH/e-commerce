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

// production env
// export const products_url = "/.netlify/functions/products";

// export const single_product_url = "/.netlify/functions/single-product?id=";

// local env
export const products_url = "https://www.course-api.com/react-store-products";

export const single_product_url =
  "https://www.course-api.com/react-store-single-product?id=";
