import React from "react";
import { IPost } from "@/types";
import styles from "./posts.module.scss";

interface Props {
  post?: IPost;
}

const PostsItem: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles.post}>
      <h5>{post?.title}</h5>
      <div className={styles.post_info}>
        <span>{post?.publicationDate}</span>
        <span>{post?.topic}</span>
      </div>
      <p>{post?.description}</p>
    </div>
  );
};

export default PostsItem;
