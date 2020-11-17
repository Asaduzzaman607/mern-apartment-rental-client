import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../Footer/Footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import House from "../House/House";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeaderMain></HeaderMain>
      {/* <PostsPage></PostsPage> */}
      <House></House>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Home;
