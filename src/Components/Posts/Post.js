import React from "react";

export const Post = ({ post }) => {
  console.log(post);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.location}</p>
      <img src={`data:image/png;base64,${post.image.img}`} style={{ width: "192px", height: "210px" }} alt="" />
    </div>
  );
};
