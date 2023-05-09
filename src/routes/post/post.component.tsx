import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPostsAsync } from "../../store/posts/posts.reducer";
import {
  selectIsPostsEmpty,
  selectPosts,
} from "../../store/posts/posts.selector";
import { navigateTo } from "../../utils/helpers/navigate";
import { formatStrForSlug } from "../../utils/helpers/helpers";
import ReactMarkdown from "react-markdown";
import { AppDispatch } from "../../store/store";
import { Post } from "../../store/posts/posts.types";
import css from "./post.module.css";

const Post = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
  const dispatch = useDispatch<AppDispatch>();
  const isPostsEmpty = useSelector(selectIsPostsEmpty);
  const postsArray = useSelector(selectPosts);
  const [post, setPost] = useState<Post>();

  const { articleSlug } = useParams();

  useEffect(() => {
    if (isPostsEmpty) dispatch(fetchPostsAsync());
  }, []);

  useEffect(() => {
    const post = postsArray.find(
      (post) => formatStrForSlug(post.title) === articleSlug
    );

    if (!post && postsArray.length) handleNavigate("/404");
    setPost(post);
  }, [postsArray, articleSlug]);

  return (
    <div className={`page-container`}>
      <div className={css["post-image-container"]}>
        <img
          className={css["post-image"]}
          src={post?.thumbnail}
          alt={post?.title}
        />
      </div>
      <div className={css["meta"]}>
        <span className={css["date"]}>
          {post?.createdAt.toLocaleDateString("en", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <h1 className={`page-heading ${css["post-title"]}`}>{post?.title}</h1>
      </div>

      <div className={css["post-container"]}>
        {post?.content && (
          <ReactMarkdown children={post.content.replace(/\\n/g, "\n")} />
        )}
      </div>
    </div>
  );
};

export default Post;
