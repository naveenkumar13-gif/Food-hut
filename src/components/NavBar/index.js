import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

function Index() {
  const [menu, setMenu] = useState("menu");

  return (
    <div className="py-5 flex justify-between items-center">
      <div className="w-[15%] h-full">
        <img src={assets.logo} alt="logo" className="w-full" />
      </div>
      <ul className="flex gap-5 text-xl text-[#49557e]  cursor-pointer">
        <li
          className={
            menu === "home"
              ? "pb-[2px]  border-b-2 border-[#49557e]   cursor-pointer"
              : ""
          }
          onClick={() => setMenu("home")}
        >
          home
        </li>
        <li
          className={
            menu === "menu"
              ? "pb-[2px]  border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }
          onClick={() => setMenu("menu")}
        >
          menu
        </li>
        <li
          className={
            menu === "mobile-app"
              ? "pb-[2px]  border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </li>
        <li
          className={
            menu === "contact-us"
              ? "pb-[2px]  border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }
          onClick={() => setMenu("contact-us")}
        >
          contact-us
        </li>
      </ul>
      <div className="flex justify-between gap-8  items-center ">
        <div>
          <img src={assets.search_icon} alt="logo" />
        </div>
        <div className="relative">
          <div>
            <img src={assets.basket_icon} alt="logo" />
            <div className="absolute min-h-3 min-w-3 bg-red-500 rounded-full -top-3 -right-1"></div>
          </div>
        </div>
        <button className="bg-transparent text-sm text-[#49557e] border py-2 px-6 rounded-full cursor-pointer hover:bg-orange-200 hover:text-stone-800 duration-300 ease-out">
          sign-sin
        </button>
      </div>
    </div>
  );
}

export default Index;
