import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/CartSlice";

function Index({ id, name, image, price, description, category }) {
  const [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch();

  function handleAddItem() {
    const newItem = {
      id: Math.floor(Math.random() * 10),
      name,
      image,
      price,
      description,
      quantity: 1,
    };
    dispatch(addItem(newItem));
    console.log(newItem);
  }
  return (
    <div className="w-full m-auto shadow-md hover:-translate-y-2  duration-500">
      <div
        className="overflow-hidden"
        data-aos="flip-up"
        data-aos-duration="2000"
        data-aos-delay={id * 100}
      >
        <img
          src={image}
          alt="image_anme"
          className="w-full h-full hover:scale-110 duration-1000  [border-radius:20px_20px_0_0] mb-4"
        />
        {!itemCount ? (
          <img
            className="w-[15%] ml-4 cursor-pointer "
            src={assets.add_icon_white}
            alt="assest_icon"
            onClick={handleAddItem}
          />
        ) : (
          <div className=" w-[15%] flex items-center gap-3 my-2 ">
            <img
              src={assets.remove_icon_red}
              alt="assest_remove"
              onClick={() => setItemCount((curr) => curr - 1)}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="assest_add"
              onClick={() => setItemCount((curr) => curr + 1)}
            />
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">{name}</p>
          <img src={assets.rating_starts} alt="rating_star" className=" w-20" />
        </div>
        <div>
          <p className="text-[#676767] text-sm mb-2">{description}</p>
          <p className="text-red-500  font-semibold ">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
