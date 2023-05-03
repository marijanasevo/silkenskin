import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectPosts } from "../../store/posts/posts.selector";

import { navigateTo } from "../../utils/helpers/navigate";

import PostCard from "../post-card/post-card.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { Post } from "../../store/posts/posts.types";
import css from "./home-blog.module.css";

const HomeBlog = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
  const postsArray = useSelector(selectPosts);
  const [postsToShow, setPostsToShow] = useState<Post[]>([]);

  useEffect(() => {
    const handleNumberOfPostsShowing = () => {
      if (window.innerWidth < 390) {
        const newPostsToShow = postsArray.slice(0, 1);
        setPostsToShow(newPostsToShow);
      } else if (window.innerWidth < 750) {
        const newPostsToShow = postsArray.slice(0, 2);
        setPostsToShow(newPostsToShow);
      } else {
        const newPostsToShow = postsArray.slice(0, 3);
        setPostsToShow(newPostsToShow);
      }
    };

    window.addEventListener("resize", handleNumberOfPostsShowing);
    handleNumberOfPostsShowing();
    return () =>
      window.removeEventListener("resize", handleNumberOfPostsShowing);
  }, [postsArray]);

  return (
    <div className={css["home-blog-container"]}>
      <div className={css["home-blog-heading"]}>
        <h2 className={"section-title " + css["title"]}>Reflect</h2>
        <span className={css["subheading"]}>
          Notes on life and what we’ve learned
        </span>
      </div>

      <div className={css["home-posts-container"]}>
        {postsToShow.map((post) => (
          <PostCard isOnHomePage={true} post={post} key={post.id} />
        ))}
      </div>

      <Button
        onClick={() => handleNavigate("/blog")}
        buttonType={BUTTON_TYPE_CLASSES.underlinedHome}
      >
        VIEW ALL
      </Button>
    </div>
  );
};

export default HomeBlog;
