import React, { useState } from "react";
import Header from "../../components/Header/index";
import ExploreMenu from "../../components/ExploreMenu/index";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
}

export default Home;
