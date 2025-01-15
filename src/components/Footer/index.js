import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

function index() {
  return (
    <div
      className="text-[#d9d9d9] bg-[#323232] flex items-center flex-col gap-5 p-6"
      id="footer"
    >
      <div className="w-full grid gap-[80px] pt-[80px] grid-cols-[2fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-5">
          <div>
            <img src={assets.logo} alt="logo" />
          </div>
          <p className="text-sm leading-relaxed">
            "Delicious meals, crafted with love and the freshest ingredients.
            Explore our diverse menu, from classic favorites to modern delights,
            and savor the taste of quality in every bite. Exceptional flavors,
            warm hospitality, and your satisfaction are our top priorities!"
          </p>
          <div className="flex gap-5">
            <img src={assets.facebook_icon} alt="logo" />
            <img src={assets.twitter_icon} alt="logo" />
            <img src={assets.linkedin_icon} alt="logo" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-3xl font-medium">COMPANY</h2>
          <ul className="font-medium text-sm flex flex-col gap-2 cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-3xl font-medium">GET IN TOUCH</h2>
          <ul className="font-medium text-sm flex flex-col gap-2 cursor-pointer">
            <li>Phone: +1 (123) 456-7890 </li>
            <li>Email: info@example.com</li>
          </ul>
        </div>
      </div>
      <hr className="my-2 text-[#ddd] h-4 w-full  " />
      <p className="text-xs text-center ">
        Copyright 2025 © Tomato.com-All rights reserved.
      </p>
    </div>
  );
}

export default index;
