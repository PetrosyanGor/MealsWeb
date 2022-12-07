import React from "react";
import Breakfast from "../components/Breakfast";
import Category from "../components/Category";
import Popular from "../components/Popular";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="Home">
      <Search/>
      <Category />
      <Breakfast />
      <Popular />
    </div>
  );
};

export default Home;
