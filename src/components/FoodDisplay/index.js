import React from "react";
import { food_list } from "../../assets/frontend_assets/assets";
import FoodList from "../FoodList/index";

function index({ category }) {
  return (
    <div className="my-8" id="food display">
      <h2 className="text-2xl font-semibold mb-6 relative group cursor-pointer">
        Top dish of your menu
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 transition-all duration-700 group-hover:w-[20%]"></span>
      </h2>
      <div className="grid grid-cols-4 gap-8 ">
        {food_list
          .filter((item) => category === "All" || category === item.category)
          .map((item, index) => (
            <div key={index}>
              <FoodList
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default index;
