import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

function index() {
  return (
    <div
      className="m-auto mt-[100px] text-3xl text-center font-medium "
      id="app-download"
    >
      <p>
        For Better Exprience Download
        <br />
        Tomato App
      </p>
      <div className="flex justify-center gap-6 my-10">
        <img
          src={assets.play_store}
          alt="play_store"
          className="hover:scale-105  duration-500"
        />
        <img
          src={assets.app_store}
          alt="app_stores"
          className="hover:scale-105  duration-500"
        />
      </div>
    </div>
  );
}

export default index;
