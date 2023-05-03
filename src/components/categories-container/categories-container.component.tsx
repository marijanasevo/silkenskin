import CategoryItem from "../category-item/category-item.component";
import css from "./categories-container.module.css";

export interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

export interface BgContainerStyle extends React.CSSProperties {
  "--bg-image": string;
}

const CategoriesContainer = () => {
  const categories: Category[] = [
    {
      id: 6,
      title: "Moisturizers",
      imageUrl:
        "https://i.pinimg.com/564x/0a/19/d7/0a19d771f1f4b4a3c0739f8622d9d7bb.jpg",
    },
    {
      id: 2,
      title: "Body care",
      imageUrl:
        "https://i.pinimg.com/564x/3c/03/0d/3c030d6fca530bef714ee13f92163d83.jpg",
    },
    {
      id: 3,
      title: "Tools & accessories",
      imageUrl:
        "https://i.pinimg.com/564x/4e/d2/bc/4ed2bc05dce6a4dccff1886122b11450.jpg",
    },
    {
      id: 4,
      title: "Serums",
      imageUrl:
        "https://i.pinimg.com/564x/2e/97/a8/2e97a850bc8fec90e71f39ea07351f9f.jpg",
    },
    {
      id: 5,
      title: "Masks",
      imageUrl:
        "https://i.pinimg.com/564x/29/6a/22/296a22daefa982867e8d23ce2af1a225.jpg",
    },
    {
      id: 1,
      title: "Mens",
      imageUrl: "https://i.ibb.co/hMkPcyh/man-in-white-crew-neck-t-shirt.jpg",
    },
  ];

  return (
    <>
      <h2 className="section-title">We Got You</h2>

      <div className={css["categories-container"]}>
        {categories.map((category) => {
          const bgContainerStyle: BgContainerStyle = {
            "--bg-image": `url(${category.imageUrl})`,
          };

          return (
            <CategoryItem
              key={category.id}
              category={category}
              bgImage={bgContainerStyle}
            />
          );
        })}
      </div>
    </>
  );
};

export default CategoriesContainer;
