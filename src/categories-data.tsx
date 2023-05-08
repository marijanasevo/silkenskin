import Moisturizers from "./assets/category-moisturizers.jpg";
import BodyCare from "./assets/category-body-care.jpg";
import ToolsAndAccessories from "./assets/category-tools-accessories.jpg";
import Serums from "./assets/category-serums.jpg";
import Masks from "./assets/category-masks.jpg";
import Mens from "./assets/category-mens.jpg";

export interface HomeCategory {
  id: number;
  title: string;
  imageUrl: string;
}

export const homeCategories: HomeCategory[] = [
  {
    id: 6,
    title: "Moisturizers",
    imageUrl: Moisturizers,
  },
  {
    id: 2,
    title: "Body care",
    imageUrl: BodyCare,
  },
  {
    id: 3,
    title: "Tools & accessories",
    imageUrl: ToolsAndAccessories,
  },
  {
    id: 4,
    title: "Serums",
    imageUrl: Serums,
  },
  {
    id: 5,
    title: "Masks",
    imageUrl: Masks,
  },
  {
    id: 1,
    title: "Mens",
    imageUrl: Mens,
  },
];
