import React, { useState } from "react";
import Header from "../../components/Header/index";
import ExploreMenu from "../../components/ExploreMenu/index";
import FoodDisplay from "../../components/FoodDisplay/index";
import AppDownload from "../../components/AppDownload/index";
import Footer from "../../components/Footer/index";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      {
        <>
          <Header />
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
          <AppDownload />
          <Footer />
        </>
      }
    </div>
  );
}

export default Home;
