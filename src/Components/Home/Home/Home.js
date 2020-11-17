import React from "react";
import PostsPage from "../../Posts/PostsPage";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../Footer/Footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeaderMain></HeaderMain>
      <PostsPage></PostsPage>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Home;
