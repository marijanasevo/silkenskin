import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { formatStrForSlug } from "../../utils/helpers/helpers";
import { navigateTo } from "../../utils/helpers/navigate";

import { Post } from "../../store/posts/posts.types";
import css from "./post-card.module.css";

export type PostCardProps = {
  post: Post;
  isOnHomePage?: boolean;
};

const PostCard = ({ post, isOnHomePage = false }: PostCardProps) => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
  const postThumbnail = useRef<HTMLImageElement>(null);

  return (
    <div className={css["post-card"]}>
      <div className={css["date"]}>
        {post.createdAt.toLocaleDateString("en", {
          month: "numeric",
          day: "numeric",
        })}
      </div>

      <img
        ref={postThumbnail}
        onClick={() => handleNavigate(`/post/${formatStrForSlug(post.title)}`)}
        src={post.thumbnail}
        alt="something"
        className={css["post-thumbnail"]}
      />

      <span className={css["post-card-tags"]}>
        {post.tags.map((tag, i) => {
          return i === post.tags.length - 1 ? tag : tag + " / ";
        })}
      </span>

      <h2
        onClick={() => handleNavigate(`/post/${formatStrForSlug(post.title)}`)}
        className={css["post-card-title"]}
      >
        {post.title}
      </h2>

      {!isOnHomePage && (
        <p className={css["post-card-excerpt"]}>{post.excerpt}...</p>
      )}
    </div>
  );
};

export default PostCard;
