import css from "./post-card.module.css";
import { useNavigate } from "react-router-dom";
import { formatStrForSlug } from "../../utils/helpers/helpers";
import { Post } from "../../store/posts/posts.types";
import { useRef } from "react";

export type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();
  const postThumbnail = useRef<HTMLImageElement>(null);

  const navigateToPost = (route: string) => {
    //@ts-ignore
    if (!document.startViewTransition) {
      return navigate(route);
    } else {
      //@ts-ignore
      document.startViewTransition(() => {
        navigate(route);
        window.scrollTo({ top: 0 });
      });
    }
  };

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
        onClick={() => navigateToPost(`/post/${formatStrForSlug(post.title)}`)}
        src={post.thumbnail}
        alt="something"
        className={css["post-thumbnail"]}
      />
      <div className={css["post-card-info"]}>
        <span className={css["post-card-tags"]}>
          {post.tags.map((tag) => tag)}
        </span>
        <h2
          onClick={() =>
            navigateToPost(`/post/${formatStrForSlug(post.title)}`)
          }
          className={css["post-card-title"]}
        >
          {post.title}
        </h2>
        <p className={css["post-excerpt"]}>{post.excerpt}...</p>
      </div>
    </div>
  );
};

export default PostCard;
