import React from "react";
import PostsPage from "../../Posts/PostsPage";
import NavBar from "../../Shared/NavBar/NavBar";
import HeaderMain from "../HeaderMain/HeaderMain";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeaderMain></HeaderMain>
      <PostsPage></PostsPage>
    </div>
  );
};

export default Home;
