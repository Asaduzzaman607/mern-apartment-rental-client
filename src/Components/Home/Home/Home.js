import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../Footer/Footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeaderMain></HeaderMain>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Home;
