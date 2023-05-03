import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../../store/posts/posts.reducer";
import {
  selectIsPostsEmpty,
  selectPosts,
} from "../../store/posts/posts.selector";

import PostCard from "../../components/post-card/post-card.component";

import css from "./blog.module.css";
import { AppDispatch } from "../../store/store";

const Blog = () => {
  const posts = useSelector(selectPosts);

  return (
    <>
      <div className={css["header"]}>
        <h1 className={`${"page-heading"} ${css["heading"]}`}>Blog</h1>
        <span className={css["subheading"]}>
          If you can't choose a product for your skin, face, body or hair - read
          our articles, we wrote them to help you make a choice.
        </span>
      </div>

      <div className={css["container"]}>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </>
  );
};

export default Blog;
