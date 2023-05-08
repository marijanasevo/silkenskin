export interface HomeCategory {
  id: number;
  title: string;
  imageUrl: string;
}

export const homeCategories: HomeCategory[] = [
  {
    id: 6,
    title: "Moisturizers",
    imageUrl: "src/assets/category-moisturizers.jpg",
  },
  {
    id: 2,
    title: "Body care",
    imageUrl: "src/assets/category-body-care.jpg",
  },
  {
    id: 3,
    title: "Tools & accessories",
    imageUrl: "src/assets/category-tools-accessories.jpg",
  },
  {
    id: 4,
    title: "Serums",
    imageUrl: "src/assets/category-serums.jpg",
  },
  {
    id: 5,
    title: "Masks",
    imageUrl: "src/assets/category-masks.jpg",
  },
  {
    id: 1,
    title: "Mens",
    imageUrl: "src/assets/category-mens.jpg",
  },
];
