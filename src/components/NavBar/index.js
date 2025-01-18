import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Index({ setLogin }) {
  const [menu, setMenu] = useState(null);
  const cart = useSelector((store) => store.cart.cart);

  return (
    <div className="py-5 flex justify-between items-center max-lg:py-4 ">
      <div className="w-[15%] h-full max-lg:w-[20%]">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-full" />
        </Link>
      </div>
      <ul className="flex gap-5 text-xl text-[#49557e]  cursor-pointer max-xl:gap-3 max-lg:hidden">
        <li
          className={
            menu === "home"
              ? "pb-[0px]  border-b-2 border-[#49557e]   cursor-pointer"
              : ""
          }
          onClick={() => setMenu("home")}
        >
          home
        </li>
        <li
          className={
            menu === "menu"
              ? "pb-[0px]  border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }
          onClick={() => setMenu("menu")}
        >
          menu
        </li>
        <li
          className={
            menu === "mobile-app"
              ? "pb-[0px]  border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </li>
        <li
          className={
            menu === "contact-us"
              ? "pb-[0px]  border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }
          onClick={() => setMenu("contact-us")}
        >
          contact-us
        </li>
      </ul>
      <div className="flex justify-between gap-8  items-center max-xl:gap-4 max-lg:hidden ">
        <div>
          <img src={assets.search_icon} alt="logo" />
        </div>
        <div className="relative">
          <Link to={"/cart"}>
            <div>
              <img src={assets.basket_icon} alt="logo" />
              <div className="absolute min-h-3 min-w-3  text-red-400   rounded-full -top-5 right-[6px]">
                {cart?.length}
              </div>
            </div>
          </Link>
        </div>

        {
          <button
            className="bg-transparent text-sm text-[#49557e] border py-2 px-6 rounded-full cursor-pointer hover:bg-orange-200 hover:text-stone-800 duration-300 ease-out"
            onClick={() => setLogin(true)}
          >
            sign-in
          </button>
        }
      </div>
    </div>
  );
}

export default Index;
