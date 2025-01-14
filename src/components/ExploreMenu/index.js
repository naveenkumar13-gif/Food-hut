import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";

function index({ category, setCategory }) {
  return (
    <div className="flex flex-col gap-4" id="menu">
      <h1 className="text-[#262626] font-semibold">Explore menu</h1>
      <p className="max-w-[60%] text-[#808080]">
        Dive into a world of culinary delights with our Explore Menu. From
        mouth-watering appetizers to delectable desserts, our menu offers a wide
        range of options to satisfy every craving. Whether you're in the mood
        for something spicy, sweet, or savory, you'll find it all here. Enjoy a
        seamless ordering experience and discover new flavors with every click.
      </p>
      <div className="flex  items-center  justify-between my-5  text-center  cursor-pointer">
        {menu_list.map((item, index) => (
          <div
            className="flex flex-col gap-6"
            key={index}
            onClick={() =>
              setCategory((curr) =>
                curr === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <div
              className="overflow-hidden "
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <img
                src={item.menu_image}
                alt="menu_image"
                style={{
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.7s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "rotate(45deg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "rotate(0deg)")
                }
                // className="w-full h-full hover:rotate-45 duration-700 "
              />
            </div>
            <p
              className={
                category === item.menu_name
                  ? " border-b-2 pb-2  border-orange-500  "
                  : ""
              }
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-3 text-[#2e2e2e] h-4 " />
    </div>
  );
}

export default index;
