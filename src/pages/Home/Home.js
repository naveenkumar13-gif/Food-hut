import React, { useState } from "react";
import Header from "../../components/Header/index";
import ExploreMenu from "../../components/ExploreMenu/index";
import FoodDisplay from "../../components/FoodDisplay/index";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
