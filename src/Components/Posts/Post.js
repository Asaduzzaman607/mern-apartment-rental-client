import React from "react";

export const Post = ({ post }) => {
  console.log(post);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
