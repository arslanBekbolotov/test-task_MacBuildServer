import React from "react";
import { IPost } from "@/types";
import PostsItem from "@/components/posts/PostsItem";
import styles from "./posts.module.scss";

interface Props {
  posts: IPost[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      <div className={styles.posts_heading}>
        <h6 className="default-title">Recent posts</h6>
        <span>View all</span>
      </div>
      <div className={styles.posts_body}>
        {posts.map((post, index) => (
          <PostsItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
