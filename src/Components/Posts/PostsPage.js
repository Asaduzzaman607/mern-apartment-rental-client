import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchallPosts } from "../Actions/PostActions";
import { Post } from "../Posts/Post";

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchallPosts());
  }, [dispatch]);

  console.log(posts);
  const renderPosts = () => {
    if (loading) return <p>Loading...</p>;
    if (hasErrors) return <p>No post to display ...</p>;
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
      <div className="row">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(PostsPage);
