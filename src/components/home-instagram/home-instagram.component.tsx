import css from "./home-instagram.module.css";
import { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  imageUrl: string;
}

const HomeInstagram = () => {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);

  return (
    <>
      <div className={css["home-instagram-heading"]}>
        <h2 className={`${css["title"]} section-title`}>We create for You</h2>
        <span className={css["subheading"]}>find us at @silken_skin_co</span>
      </div>
      <div className={css["instagram-grid"]}>
        {instagramPosts.map((post) => (
          <div key={post.id} className={css["instagram-post"]}>
            <a
              href={`https://www.instagram.com/p/${post.id}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={post.imageUrl} alt="instagram-image" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeInstagram;
