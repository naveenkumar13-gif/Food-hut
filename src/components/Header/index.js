import React from "react";
import "./index.css";

function index() {
  return (
    <div className="header-background">
      <div
        className="flex flex-col absolute items-start gap-4 max-w-[50%] bottom-[15%] left-[20%] "
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <h2 className="font-semibold text-white text-7xl">
          Order your favorite food here
        </h2>
        <p className="text-white text-[15px] leading-relaxed">
          <strong className="text-orange-300 font-bold text-lg">
            Food Del
          </strong>{" "}
          is your go-to app for ordering meals. Whether you're craving a snack
          or a feast, Enjoy an easy menu and seamless ordering process. Stay
          updated with the latest promotions through the contact-us section.
        </p>
        <button className="border-none font-semibold text-[#747474] bg-white py-2 px-4  rounded-full text-sm hover:bg-orange-200 duration-500 ease-out">
          view menu
        </button>
      </div>
    </div>
  );
}

export default index;
