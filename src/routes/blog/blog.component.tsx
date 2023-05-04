import { useSelector } from "react-redux";
import { selectPosts } from "../../store/posts/posts.selector";

import PostCard from "../../components/post-card/post-card.component";

import css from "./blog.module.css";

const Blog = () => {
  const posts = useSelector(selectPosts);

  return (
    <div className={`${"page-container"}`}>
      <div className={css["header"]}>
        <h1 className={`${"page-heading"} ${css["heading"]}`}>Blog</h1>
        <span className={css["subheading"]}>
          If you can't choose a product for your skin, face, body or hair - read
          our articles, we wrote them to help you make a choice.
        </span>
      </div>

      <div className={`${css["posts-container"]}`}>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
